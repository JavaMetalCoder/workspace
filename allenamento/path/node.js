const fs = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, 'dati', 'test.txt');

async function leggiFile() {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    console.log('Contenuto: ', data);
  } catch (err) {
    console.error('Errore: ', err.message);
  }
}

leggiFile();