// @ts-check

import { parseString } from "@fast-csv/parse";
import { readdir, readFile, writeFile } from "node:fs/promises";

/**
 * @typedef {import('./type').Region} Region
 */

async function main() {
  const files = (await readdir("./data")).filter((file) =>
    file.endsWith("eng.csv"),
  );
  console.log(files);

  const promises = files.map(async (filename) => {
    const short = filename.slice(4, 6);
    const file = await readFile(`./data/${filename}`, "utf8");

    /** @type {import('@fast-csv/parse').CsvParserStream<Region, Region>} */
    const csv = parseString(file, { headers: true });
    const res = await csv
      .filter((/** @type {Region} row */ row) => {
        if (
          row["Generic Category"] === "Populated Place" &&
          row["Concise Code"] !== "UNP"
        )
          return true;
        return false;
      })
      .map((/** @type {Region} */ row) => {
        return {
          name: row["Geographical Name"],
          term: row["Generic Term"],
          latitude: row["Latitude"],
          longitude: row["Longitude"],
        };
      })
      .toArray();

    const stringed = JSON.stringify(res);
    await writeFile(`src/${short}.json`, stringed);
  });

  await Promise.all(promises);
}

main();
