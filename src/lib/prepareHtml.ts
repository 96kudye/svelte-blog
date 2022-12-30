import * as cheerio from 'cheerio';
import hljs from 'highlight.js'

export const prepareHtml = (html: string) => {
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

  return $('body').html();
}