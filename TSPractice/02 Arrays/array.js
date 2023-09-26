/* ********************* 20 Array Methods in Typescript *************************** */


// Basics
var arrayBasic = [3, 4, 5, 6]
console.log(arrayBasic[2])
// let array1: Array<string> = ['Ali', 'Haider']

// indexOf()
var arrayOne = ['Ali', 'Ahmed', 'Abuzar', 'Ammar']
let result = arrayOne.push('Haider')
console.log(result)

console.log(arrayOne.indexOf('Test')) //-1
console.log(arrayOne.indexOf('Abuzar')) //2
console.log(arrayOne.indexOf('Ahmed') !== -1) //true

// lastIndexOf()
var arrayTwo = [2, 5, 8, 10]
console.log(arrayTwo.lastIndexOf(5))
console.log(arrayTwo.lastIndexOf(10))
