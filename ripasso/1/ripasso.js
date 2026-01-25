


function filtraPari(array) {
  
  const arrayFinale = [];
  for (let i = 0; i <= array.length; i++) {
     if (array[i]%2 === 0)
      
    arrayFinale.push(array[i]);

  }
  return arrayFinale.sort((a, b) => b - a);

}
