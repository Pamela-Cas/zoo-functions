const { employees } = require('../data/zoo_data');

const isManager = (id) => employees.some((emp) => emp.managers.includes(id));

function getRelatedEmployees(managerId) {
  try {
    if (isManager(managerId)) {
      return employees.filter(({ managers }) => managers.includes(managerId))
        .map(({ firstName, lastName }) => `${firstName} ${lastName}`);
    }
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } catch (error) {
    throw error.message;
  }
}

module.exports = { isManager, getRelatedEmployees };
// realizado durante mentoria contribuição Baêta e Cárol!!;
