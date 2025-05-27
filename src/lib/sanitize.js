
export function sanitizeMarkdown(input) {
  // Vervang codeblokken met Markdown-tabellen, incl. taal zoals ```tabular of ```text
  return input.replace(/```[a-zA-Z0-9]*\n(\|.+?\|(?:\r?\n|\n|\r)+[\s\S]+?)```/g, '$1');
}
