/* ********************* 20 Array Methods in Typescript *************************** */

// Basics

let arrayBasic: number[] = [3, 4, 5, 6]
console.log(arrayBasic[2])

let array1: Array<string> = ['Ali', 'Haider'] //Alternative Correct Syntax
console.log(array1[1])

let nullArray: number[] = [] // Null Array
nullArray.push(12)
console.log(typeof nullArray)

// indexOf()

let arrayOne: string[] = ['Ali', 'Ahmed', 'Abuzar', 'Ammar']
console.log(arrayOne.indexOf('Test')) //-1
console.log(arrayOne.indexOf('Abuzar')) //2
console.log(arrayOne.indexOf('Ahmed') !== -1) //true

// lastIndexOf()

let arrayTwo: number[] = [2, 5, 8, 10]
console.log(arrayTwo.lastIndexOf(5))
console.log(arrayTwo.lastIndexOf(10))

// map()

let mapArray: number[] = [2, 1, 6, 8]
const doubled = mapArray.map((num) => num * 2)
console.log(doubled)
