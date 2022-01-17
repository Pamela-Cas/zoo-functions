const { species } = require('../data/zoo_data');

function getAnimalMap(option) {
  if (!option) {
    return species.reduce((acc, spec) => (
      { ...acc, [spec.name]: spec.residents.location.length }
    ), {});
  }
}

console.log(getAnimalMap());

module.exports = getAnimalMap;
