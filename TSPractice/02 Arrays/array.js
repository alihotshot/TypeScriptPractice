"use strict";
/* ********************* 20 Array Methods in Typescript *************************** */
Object.defineProperty(exports, "__esModule", { value: true });
// indexOf()
var arrayOne = ['Ali', 'Ahmed', 'Abuzar', 'Ammar'];
console.log(arrayOne.indexOf('Test')); //-1
console.log(arrayOne.indexOf('Abuzar')); //2
console.log(arrayOne.indexOf('Ahmed') !== -1); //true
// lastIndexOf()
var arrayTwo = [2, 5, 8, 10];
console.log(arrayTwo.lastIndexOf(5));
console.log(arrayTwo.lastIndexOf(10));
