export const extractHeadings = (contentHtml: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(contentHtml, 'text/html');
    const headings = Array.from(doc.querySelectorAll('h1, h2, h3, h4')).map((heading) => ({
      id: heading.id,
      text: heading.textContent || '',
      level: parseInt(heading.tagName.replace('H', ''), 10),
    }));
    return headings;
  };
  