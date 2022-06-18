const newInventoryCarModels = ["S1", "T1", "S2", "S1", "S2", "S1"];
const newInventoryYearBuilt = [1922, 2011, 1975, 2002, 1965, 1951];
const carAge = [];
let curYear = 2022;
for (let i = 0; i < newInventoryYearBuilt.length; i++) {
  const age = curYear - newInventoryYearBuilt[i];
  carAge.push(age);
}

let total = 0;
const numOfCars = newInventoryCarModels.length;
for (let i = 0; i < carAge.length; i++) {
  console.log(carAge[i]);
  total += carAge[i];
}

const average = total / numOfCars;
console.log("The average car age is ", average);
