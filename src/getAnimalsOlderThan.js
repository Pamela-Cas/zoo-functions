const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animalsArray = data.species.find((specie) => specie.name === animal);
  // Primeiro procura o nome do animal dentro de 'species'.
  return animalsArray.residents.every((ages) => ages.age >= age);
  // Em seguida busca todos os animais com que tenham a idade maior ou igual à passada no parâmetro.
}

module.exports = getAnimalsOlderThan;
// referencia https://warcontent.com/array-find-javascript/
// https://ricardo-reis.medium.com/every-do-array-javascript-e0cf24607164
