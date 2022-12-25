import * as cheerio from 'cheerio';
import hljs from 'highlight.js'

export const prepareHtml = (html: string) => {
  const $ = cheerio.load(html);
  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass('hljs');
  });

  $('blockquote').wrapInner('<p></p>');

  $('iframe').wrap('<div class="video"></div>');

  return $('body').html();
}