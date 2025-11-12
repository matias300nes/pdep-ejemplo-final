import * as fs from "fs";
import * as path from "path";

export function readFromFile<T>(filename: string): T[] {
  const filepath = path.join(__dirname, "..", "..", `${filename}.json`);

  try {
    if (fs.existsSync(filepath)) {
      const data = fs.readFileSync(filepath, "utf-8");
      return JSON.parse(data);
    }
  } catch (error) {
    console.error(`Error leyendo archivo ${filename}.json:`, error);
  }

  return [];
}

export function writeToFile<T>(filename: string, data: T[]): void {
  const filepath = path.join(__dirname, "..", "..", `${filename}.json`);

  try {
    fs.writeFileSync(filepath, JSON.stringify(data, null, 2), "utf-8");
    console.log(`✓ Datos guardados en ${filename}.json`);
  } catch (error) {
    console.error(`Error escribiendo archivo ${filename}.json:`, error);
  }
}
