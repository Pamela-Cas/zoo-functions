const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) { // Se nenhum argumento for passado
    return species.reduce((acc, spec) => ( //  retorna um objeto cujo o nome de cada espécie é uma chave desse objeto,
      { ...acc, [spec.name]: spec.residents.length } //  cujo o nome de cada espécie é uma chave desse objeto,
    ), {});
  }

  const animalToCount = species.find((spec) => spec.name === animal.specie); // Objeto chave specie
  if (!animal.sex) {
    return animalToCount.residents.length; // retorna a quantidade de animais daquela espécie;
  }
  return animalToCount.residents.filter((spec) => spec.sex === animal.sex).length; // chave specie e sex / a quantidade de animais daquela espécie, no sexo
}
module.exports = countAnimals;
