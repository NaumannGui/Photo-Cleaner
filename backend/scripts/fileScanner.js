import fs from "fs";
import path from "path";

const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".webp"];

export function listImages(directory) {
  try {
    const files = fs.readdirSync(directory);
    const images = files.filter(file => imageExtensions.includes(path.extname(file).toLowerCase()));

    console.log("\nImagens encontradas:");
    images.forEach(image => console.log(image));

    return images;
  } catch (error) {
    console.error("Erro ao acessar a pasta:", error.message);
    return [];
  }
}