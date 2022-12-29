import * as cheerio from 'cheerio';
import { isText } from 'domhandler';

export const tocFromHtml = (html: string): ToC => {
  const $ = cheerio.load(html);
  const headings = $('h1, h2, h3').toArray();
  return headings.map(data => {
    let firstChild = data.firstChild;
    return {
      id: data.attribs.id,
      style: 'toc_' + data.name,
      text: (firstChild && isText(firstChild)) ? firstChild.data : '',
    }
  });
}

export type ToC = {
  id: string;
  style: string;
  text: string;
}[];