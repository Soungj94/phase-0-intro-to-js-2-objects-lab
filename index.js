// let employee = {
//   name: "John Doe",
//   streetAddress: "123 Main St",
// };

// function updateEmployeeWithKeyAndValue(employee, key, value) {
//   return {
//     ...employee,
//     [key]: value,
//   };
// }

// function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
//   employee[key] = value;
//   return employee;
// }

// function deleteFromEmployeeByKey(employee, key) {
//   const newEmployee = { ...employee };
//   delete newEmployee[key];
//   return newEmployee;
// }

// function destructivelyDeleteFromEmployeeByKey(employee, key) {
//   delete employee[key];
//   return employee;
// }

let employee = {
  name: "John Doe",
  streetAddress: "123 Main St",
};

function updateEmployeeWithKeyAndValue(emplyee, key, value) {
  return {
    ...employee,
    [key]: value,
  };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}
// The deleteFromEmployeeByKey function is defined with two parameters: employee and key.
// Inside the function, the newEmployee constant is created. The { ...employee } syntax uses the object spread operator (...) to create a shallow copy of the employee object. This means that all the properties of the employee object are copied into the new newEmployee object.
// The delete operator is then used to remove the specified key from the newEmployee object. The delete operator removes a property from an object. If the property exists on the object, it will be removed; otherwise, the operation has no effect.
// Finally, the function returns the newEmployee object, which is a clone of the original employee object but without the specified key.
// In summary, the deleteFromEmployeeByKey function creates a clone of the employee object, deletes the specified key from the cloned object, and then returns the modified clone. The original employee object remains unchanged.

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
