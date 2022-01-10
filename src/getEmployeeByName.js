const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};

  const employee = data.employees.find((name) => (name
    .firstName === employeeName || name.lastName === employeeName));
  return employee;
}

module.exports = getEmployeeByName;
