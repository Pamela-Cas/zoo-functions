const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) { // ...inclui em um array
  const arrSpecies = ids.map((id) => data.species.find((specie) => specie.id === id));
  return arrSpecies;
}

module.exports = getSpeciesByIds;
