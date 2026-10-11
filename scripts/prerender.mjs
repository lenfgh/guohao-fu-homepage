import { readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const htmlPath = resolve(projectRoot, "dist/index.html");
const { render } = await import(pathToFileURL(resolve(projectRoot, ".prerender/entry-server.js")).href);
const html = await readFile(htmlPath, "utf8");
const placeholder = '<div id="root"></div>';

if (!html.includes(placeholder)) {
  throw new Error("The built page is missing its empty React root.");
}

const markup = render();
if (!markup.includes('id="publications"') || !markup.includes("Guohao Fu")) {
  throw new Error("The rendered homepage is missing its profile or publications.");
}

await writeFile(htmlPath, html.replace(placeholder, () => `<div id="root" data-prerendered="true">${markup}</div>`));
console.log("Prerendered the complete homepage into dist/index.html.");
