import * as pdfjsLib from 'pdfjs-dist';

// Set the workerSrc to ensure the PDF worker script is loaded correctly from the CDN.
// This is required by pdfjs-dist to work in a browser environment.
// @ts-ignore
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;

// A type guard to check if an item from getTextContent is a TextItem.
interface TextItem {
    str: string;
    // other properties are not relevant for our use case
}
const isTextItem = (item: any): item is TextItem => typeof item.str === 'string';

/**
 * Parses a PDF file and extracts its text content.
 * @param file The PDF file to parse.
 * @returns A promise that resolves to the text content of the PDF.
 */
export const parsePdf = async (file: File): Promise<string> => {
  const arrayBuffer = await file.arrayBuffer();
  const loadingTask = pdfjsLib.getDocument(arrayBuffer);
  const pdf = await loadingTask.promise;
  
  const numPages = pdf.numPages;
  let fullText = '';
  
  // Iterate through each page of the PDF to extract text.
  for (let i = 1; i <= numPages; i++) {
    const page = await pdf.getPage(i);
    const textContent = await page.getTextContent();
    
    // Filter out any non-text items and join the text strings.
    const pageText = textContent.items
      .filter(isTextItem)
      .map(item => item.str)
      .join(' ');
      
    fullText += pageText + '\n'; // Add a newline character between pages for better readability.
  }
  
  return fullText;
};
