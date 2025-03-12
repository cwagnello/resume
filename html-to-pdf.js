const puppeteer = require('puppeteer');

async function generatePDF(url, outputPath) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.pdf({ path: outputPath, format: 'A4' });
  await browser.close();
}

// Usage
generatePDF('https://cwagnello.github.io/resume/', '/Users/cwagnello/workspace/resume/CharlesWAgnello.pdf')
  .then(() => console.log('PDF generated successfully'))
  .catch(err => console.error('Error generating PDF:', err));






//var html_to_pdf = require('html-pdf-node');

//let options = { format: 'A4' };
// Example of options with args //
// let options = { format: 'A4', args: ['--no-sandbox', '--disable-setuid-sandbox'] };

//let file = { url: "https://cwagnello.github.io/resume/", path: "/Users/cwagnello/workspace/resume/CharlesWAgnello.pdf" };
//html_to_pdf.generatePdf(file, options).then(pdfBuffer => {
//  console.log("PDF Buffer:-", pdfBuffer);
//});
