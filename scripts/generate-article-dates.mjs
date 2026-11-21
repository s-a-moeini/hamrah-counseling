
import { execFileSync } from 'node:child_process';
import { readdirSync, mkdirSync, writeFileSync } from 'node:fs';
import { join, basename } from 'node:path';

const articlesDirectory = 'src/content/articles';
const outputDirectory = 'src/data';
const outputFile = join(outputDirectory, 'article-dates.json');

const files = readdirSync(articlesDirectory)
  .filter((file) => file.endsWith('.md'));

const articleDates = {};

for (const file of files) {
  const filePath = join(articlesDirectory, file);

  const history = execFileSync(
    'git',
    [
      'log',
      '--diff-filter=A',
      '--follow',
      '--format=%cI',
      '--',
      filePath,
    ],
    { encoding: 'utf8' }
  ).trim();

  const dates = history
    ? history.split('\n').filter(Boolean)
    : [];

  const slug = basename(file, '.md');

  articleDates[slug] = dates.at(-1) || null;
}

mkdirSync(outputDirectory, { recursive: true });

writeFileSync(
  outputFile,
  JSON.stringify(articleDates, null, 2),
  'utf8'
);

console.log('Article publication dates generated successfully.');
