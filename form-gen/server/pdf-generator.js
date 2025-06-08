import express from 'express';
import puppeteer from 'puppeteer';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
  res.send('PDF Generation Server is running');
});

app.post('/generate-pdf', async (req, res) => {
  const { html } = req.body;

  console.log('I am POSTTT')

  if (!html) {
    console.error('No HTML content provided');
    return res.status(400).json({ error: 'No HTML content provided' });
  }

  // res.status(503).json({ 
  //   error: 'PDF generation is currently disabled',
  //   details: 'PDF generation code is commented out for testing' 
  // });

  let browser;
  try {
    console.log('Launching browser...');
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    console.log('Creating new page...');
    const page = await browser.newPage();
    
    // Set viewport to A4 size
    await page.setViewport({
      width: 794, // A4 width in pixels at 96 DPI
      height: 1123, // A4 height in pixels at 96 DPI
      deviceScaleFactor: 2
    });

    console.log('Setting content...');
    await page.setContent(html, {
      waitUntil: ['networkidle0', 'domcontentloaded']
    });

    // Wait for any images or fonts to load
    await page.evaluateHandle('document.fonts.ready');

    console.log('Generating PDF...');
    const pdf = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: {
        top: '20px',
        right: '20px',
        bottom: '20px',
        left: '20px'
      },
      preferCSSPageSize: true
    });

    console.log('PDF generated successfully');
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=form-submission.pdf');
    res.send(pdf);
  } catch (error) {
    console.error('PDF generation error:', error);
    res.status(500).json({ 
      error: 'Failed to generate PDF',
      details: error.message 
    });
  } finally {
    if (browser) {
      console.log('Closing browser...');
      await browser.close();
    }
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`PDF generation server running on port ${PORT}`);
}); 