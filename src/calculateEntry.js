const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // eslint-disable-next-line editorconfig/editorconfig
  const child = entrants.filter((entrada) => entrada.age < 18).length;
  const adult = entrants.filter((entrada) => entrada.age >= 18 && entrada.age < 50).length;
  const senior = entrants.filter((entrada) => entrada.age >= 50).length;
  const quantd = {
    child,
    adult,
    senior,
  };
  return quantd;
}

function calculateEntry(entrants) {
  if (!entrants || !Object.keys(entrants).length) return 0;
  const obj = countEntrants(entrants);
  const qtdAdult = Object.entries(obj).find((valor) => valor[0] === 'adult')[1];
  const qtdChild = Object.entries(obj).find((valor) => valor[0] === 'child')[1];
  const qtdSenior = Object.entries(obj).find((valor) => valor[0] === 'senior')[1];
  const pricesAdult = Object.entries(data.prices).find((valor) => valor[0] === 'adult')[1];
  const pricesChild = Object.entries(data.prices).find((valor) => valor[0] === 'child')[1];
  const pricesSenior = Object.entries(data.prices).find((valor) => valor[0] === 'senior')[1];
  const valorTotal = pricesAdult * qtdAdult + pricesChild * qtdChild + pricesSenior * qtdSenior;
  return valorTotal;
}

module.exports = { calculateEntry, countEntrants };
