/* ********************* 20 Array Methods in Typescript *************************** */

// Basics

let arrayBasic: number[] = [3, 4, 5, 6]
console.log(arrayBasic[2])
// let array1: array<string> = ['Ali', 'Haider']

// indexOf()

let arrayOne: string[] = ['Ali', 'Ahmed', 'Abuzar', 'Ammar']
console.log(arrayOne.indexOf('Test')) //-1
console.log(arrayOne.indexOf('Abuzar')) //2
console.log(arrayOne.indexOf('Ahmed') !== -1) //true

// lastIndexOf()

let arrayTwo: number[] = [2, 5, 8, 10]
console.log(arrayTwo.lastIndexOf(5))
console.log(arrayTwo.lastIndexOf(10))
