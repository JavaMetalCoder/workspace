const fs = require('fs');
const fs_async = require('fs/promises');

fs.writeFile('testo.txt', 'NOOOOOO PERDINCIBACCO', 'utf-8', (err) => {
  if (err) return console.error("Errore ", err);
  console.log("File creato/sovrascritto");
})

fs.readFile('testo.txt', 'utf-8', (err, data) => {
  if (err) return console.error('Errore: ', err);
  console.log(data);
});

async function scriviELeggi() {
  try {
    await fs_async.writeFile('testo.txt', 'NOOOOO PERDINCIBACCO', 'utf-8');
      console.log('File scritto');
    

    const data = await fs_async.readFile('testo.txt', 'utf-8');
      console.log('Contenuto: ', data);
      console.log('Char:', data.length);
    

  } catch (err) {
    console.error('errore: ', err.message);

  }
}

scriviELeggi();