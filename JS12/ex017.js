let values = [8, 1, 7, 4, 2, 9];
/*
console.log(values[0]);
console.log(values[1]);
console.log(values[2]);
console.log(values[3]);
console.log(values[4]);
console.log(values[5]);
console.log(values[6]);
*/
/*
for (let pos = 0; pos < values.length; pos++) {
  console.log(`The position ${pos} has the ${values[pos]} value `);
}
*/

for (let pos in values) {
  console.log(values[pos]);
}
