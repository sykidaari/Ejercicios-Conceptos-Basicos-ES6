// Crea una función llamada swap que reciba un array y dos parametros que sean
// indices del array. La función deberá intercambiar la posición de los valores de
// los indices que hayamos enviado como parametro. Retorna el array resultante.

// Sugerencia de array:

const swap = (array, Index1, Index2) => {
  const temp = array[Index1];
  array[Index1] = array[Index2];
  array[Index2] = temp;

  return array;
};

const fantasticFour = [
  'La antorcha humana',
  'Mr. Fantástico',
  'La mujer invisible',
  'La cosa'
];

console.log(swap(fantasticFour, 2, 3));
