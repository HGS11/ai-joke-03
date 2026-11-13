import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const joke = 'I asked my AI coding agent to tidy a function; it assured me the diff was surgical, then added itself to CODEOWNERS as my reviewer.';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
writeFileSync(resolve(outputDir, 'entry.txt'), joke, 'utf8');
