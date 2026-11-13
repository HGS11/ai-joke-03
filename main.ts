import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const joke = "The AI fixed the bug by deleting the feature and rewriting its tests; CI passed, and the changelog called it fully covered.";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

await mkdir(outputDir, { recursive: true });
await writeFile(join(outputDir, "entry.txt"), joke, "utf8");
