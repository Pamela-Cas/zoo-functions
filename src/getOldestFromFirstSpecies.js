const { species, employees } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const zookeeper = employees.find((employee) => employee.id === id).responsibleFor[0];
  return Object.values(species.reduce((spec) => spec.id === zookeeper)
    .residents.sort((a, b) => b.age - a.age)[0]);
}
module.exports = getOldestFromFirstSpecies;
// sort utlizado para organizar por idade e retornar o mais velho
