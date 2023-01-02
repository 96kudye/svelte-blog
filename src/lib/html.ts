import * as cheerio from 'cheerio';
import { isText } from 'domhandler';
import hljs from '$lib/hljs'
import type { HTML } from "./microcms";

const combineHtmls = (htmls: HTML[]): string => {
  return htmls.reduce((previous, current) => previous + current[current.fieldId], '');
}

export const prepareHtmls = (htmls: HTML[]): string => {
  let html = combineHtmls(htmls);
  const $ = cheerio.load(html);
  $('pre code').each((_, elm) => {
    const lines = $(elm).text().split('\n');
    const lang = lines.shift()?.slice(1, -1);
    const result = !!lang
      ? hljs.highlight(lang, lines.join('\n'))
      : hljs.highlightAuto(lines.join('\n'));
    $(elm).html(result.value);
    $(elm).addClass('hljs');
  });

  $('blockquote').wrapInner('<p></p>');

  $('iframe').attr('loading', 'lazy');
  $('iframe').wrap('<div class="video"></div>');

  // TODO: ページ内遷移をすることは考えていない（ToCがあるため不要なはず）
  $('a').each((_, elm) => {
    if (!$(elm).attr('href')?.includes('http')) {
      $(elm).attr('rel', 'external');
    }
  });

  return $('body').html() ?? '';
}

export const tocFromHtml = (html: string): ToC[] => {
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
};