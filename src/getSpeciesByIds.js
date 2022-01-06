const data = require('../data/zoo_data');

function getSpeciesByIds(...currs) {
  const arrSpecies = currs.map((curr) => data.species.find((specie) => specie.id === curr));
  return arrSpecies;
}

module.exports = getSpeciesByIds;
