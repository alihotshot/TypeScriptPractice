/* ********************* 20 Array Methods in Typescript *************************** */
// Basics
var arrayBasic = [3, 4, 5, 6];
console.log(arrayBasic[2]);
var array1 = ['Ali', 'Haider']; //Alternative Correct Syntax
console.log(array1[1]);
var nullArray = []; // Null Array
nullArray.push(12);
console.log(typeof nullArray);
// indexOf()
var arrayOne = ['Ali', 'Ahmed', 'Abuzar', 'Ammar'];
console.log(arrayOne.indexOf('Test')); //-1
console.log(arrayOne.indexOf('Abuzar')); //2
console.log(arrayOne.indexOf('Ahmed') !== -1); //true
// lastIndexOf()
var arrayTwo = [2, 5, 8, 10];
console.log(arrayTwo.lastIndexOf(5));
console.log(arrayTwo.lastIndexOf(10));
// lastIndexOf()
var mapArray = [2, 1, 6, 8];
var doubled = mapArray.map(function (num) { return num * 2; });
console.log(doubled);
