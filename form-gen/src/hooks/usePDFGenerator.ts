import React, { useCallback } from 'react';
import { createRoot } from 'react-dom/client';

interface TemplateProps<T> {
  data: T
}

type Template<T> = React.ComponentType<TemplateProps<T>>

const waitForRender = () => new Promise<void>(resolve => {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => resolve());
  })
})

const collectStyles = () => {
  return Array.from(document.styleSheets)
    .filter(sheet => {
      try {
        // Only process same-origin stylesheets
        return !!sheet.cssRules;
      } catch {
        return false;
      }
    })
    .map(sheet => Array.from(sheet.cssRules)
      .map(rule => rule.cssText)
      .join('\n'))
    .join('\n');
};

const generatePDFFromHTML = async (html: string): Promise<Blob> => {
  const response = await fetch('http://localhost:3001/generate-pdf', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ html })
  });

  const contentType = response.headers.get('Content-Type');
  
  if (!response.ok || !contentType?.includes('application/pdf')) {
    const error = await response.json();
    throw new Error(error.details || 'PDF generation failed');
  }

  return response.blob();
};

const generateHTML = (content: string, styles: string) => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <style>
        ${styles}
        body { margin: 0; padding: 0; }
        @page { size: A4; margin: 20px; }
      </style>
    </head>
    <body>
      ${content}
    </body>
  </html>`;

export const usePDFGenerator = <T, >() => {
  const generatePDF = useCallback(async (data: T, template: Template<T>) => {
    // Create a temporary div to render the PDF template
    const tempDiv = document.createElement('div');
    tempDiv.style.position = 'absolute';
    tempDiv.style.left = '-9999px';
    document.body.appendChild(tempDiv);
    
    try {
      // Render the template
      const root = document.createElement('div');
      root.id = 'pdf-template-container';
      tempDiv.appendChild(root);
      
      // Use ReactDOM to render the template
      const reactRoot = createRoot(root);
      reactRoot.render(React.createElement(template, { data }));
      
      // Wait for the template to render
      await waitForRender()

      // Get all stylesheets
      const styles = collectStyles()

      // Create a complete HTML document with styles
      const completeHtml = generateHTML(root.innerHTML, styles)
      const pdfBlob = await generatePDFFromHTML(completeHtml);
      
      // Create download link
      const url = window.URL.createObjectURL(pdfBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'form-submission.pdf';
      link.click();
      window.URL.revokeObjectURL(url);

    } catch (error: unknown) {
      console.error('PDF generation error:', error);
      alert(`Failed to generate PDF: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      // Cleanup
      document.body.removeChild(tempDiv);
    }
  }, []);

  return { generatePDF };
}; 