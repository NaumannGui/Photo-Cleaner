import inquirer from "inquirer";
import { listImages } from "./backend/scripts/fileScanner.js";
import fs from "fs";

async function selectFolder() {
  const answer = await inquirer.prompt([
    {
      type: "input",
      name: "folderPath",
      message: "Digite o caminho da pasta que deseja analisar:",
      validate: input => fs.existsSync(input) ? true : "Pasta não encontrada. Tente novamente."
    }
  ]);

  return answer.folderPath;
}

async function selectImage(images) {
  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "selectedImage",
      message: "Selecione uma imagem de referência para encontrar semelhantes:",
      choices: images
    }
  ]);

  return answer.selectedImage;
}

async function main() {
  const folderPath = await selectFolder();
  const images = listImages(folderPath);

  if (images.length === 0) {
    console.log("Nenhuma imagem encontrada na pasta.");
    return;
  }

  const selectedImage = await selectImage(images);
  console.log(`\nImagem de referência selecionada: ${selectedImage}`);
}

main();