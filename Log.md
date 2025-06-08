# Project Progress & Learning Log: FormToPDF

## 1. Project Initialization

- **Defined the MVP:**  
  Started by brainstorming the minimum viable product (MVP) with ChatGPT. Outlined the core features needed for the first version.

- **UI Sketching:**  
  Drew a rough sketch of the user interface, focusing on a form input area followed by a live preview section.  
  Decided to postpone detailed Figma designs until after discussions with stakeholders.

- **Architecture Planning:**  
  Thought through the architecture, including:
  - Component structure
  - Data flow between form, preview, and PDF generation
  - Folder and file organization for scalability

## 2. Technology Exploration

- **Initial Approach:**  
  Started with `html2canvas` and `jsPDF` for PDF generation.  
  - Implemented basic coding using these libraries.
  - Realized that this approach uses a screenshot method, which is suitable for small projects but not ideal for complex, styled documents.

- **Pivot to Puppeteer:**  
  Researched industry practices and discovered that Puppeteer is widely used for robust, high-quality PDF generation.
  - Decided to switch to Puppeteer for server-side PDF rendering.
  - Set up a backend service using Puppeteer to generate PDFs from HTML and CSS.

## 3. Implementation & Iteration

- **Frontend:**  
  - Built form components and a live preview using React.
  - Designed the data flow to ensure the form data is reflected in the preview and sent to the backend for PDF generation.

- **Backend:**  
  - Set up an Express server with a `/generate-pdf` endpoint.
  - Integrated Puppeteer to render HTML templates and generate PDFs.

- **Styling:**  
  - Implemented a method to collect all styles from the frontend and inject them into the HTML sent to Puppeteer, ensuring the PDF matches the on-screen preview.

## 4. Learning & Support

- **Continuous Learning:**  
  - Sought help from ChatGPT and GitHub Copilot throughout the process for brainstorming, debugging, and code suggestions.
  - Improved my understanding of TypeScript generics, and browser rendering cycles like use of requestAnimationFrame().

## 5. Next Steps

- **UI/UX:**  
  - Plan to create detailed Figma designs after stakeholder feedback.
- **Testing & Feedback:**  
  - Gather feedback from users and stakeholders.
  - Complete 2 pages of one form, then talk to the stakeholders
  - Iterate on the form, preview, and PDF output for better usability and accuracy.
