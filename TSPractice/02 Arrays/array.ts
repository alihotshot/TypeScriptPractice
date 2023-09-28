/* ********************* 20 Array Methods in Typescript *************************** */

import { log } from 'console'

// Basics

let arrayBasic: number[] = [3, 4, 5, 6]
console.log(arrayBasic[2])

let array1: Array<string> = ['Ali', 'Haider'] //Alternative Correct Syntax
console.log(array1[1])

let nullArray: number[] = [] // Null Array
nullArray.push(12)
console.log(typeof nullArray)

// indexOf()

console.log('*****IndexOf')

let arrayOne: string[] = ['Ali', 'Ahmed', 'Abuzar', 'Ammar']
console.log(arrayOne.indexOf('Test')) //-1
console.log(arrayOne.indexOf('Abuzar')) //2
console.log(arrayOne.indexOf('Ahmed') !== -1) //true

// lastIndexOf()

console.log('*****LastIndexOf')

let arrayTwo: number[] = [2, 5, 8, 8, 10]
console.log(arrayTwo.lastIndexOf(8))
console.log(arrayTwo.lastIndexOf(10))

// map()

console.log('*****Map')

let mapArray: number[] = [2, 1, 6, 8]
const doubled = mapArray.map((num) => num * 2)
console.log(doubled)

// concat() - combile array elements

console.log('*****Concat')

let countArray1: number[] = [1, 2, 3]
let countArray2: number[] = [4, 5, 6]
console.log('Result : ', countArray1.concat(countArray2))

// join() - Join with an operator/given symbol

console.log('*****Join')

let joinArray: string[] = ['Ali', 'Mansoob']
console.log('Joined Array: ', joinArray.join('**'))

// push() & pop()

console.log('*****Push & Pop')

let pushArray: number[] = [45, 78, 90]
console.log(pushArray.push(25))
console.log(pushArray)

console.log(pushArray.pop())
console.log(pushArray)

// Reverse()

console.log('*****Reverse')

let reverseArray: string[] = ['Haider', 'Ali']
console.log(reverseArray.reverse())

// shift() - It is the opposite of pop() and remove first element of array

console.log('*****Shift')

let shiftArray: number[] = [1, 2, 3, 4]
console.log(shiftArray.shift())
console.log(shiftArray)

// unshift() - It is the opposite of shift() and add first element of an array

console.log('*****UnShift')

let unshiftArray: number[] = [2, 3, 4]
console.log(unshiftArray.unshift(1))
console.log(unshiftArray)

// slice() - Slice an array btw index

console.log('*****Slice')

let sliceArray: number[] = [1, 2, 3, 4, 5, 6]
console.log('Slice Array: ', sliceArray.slice(2, 5))
console.log(sliceArray)

// splice()-  This method can be used for multiple purposes. For, Add/ Replace/ Remove
// Add an element to an array, Replace specific elements within an array, Remove specific elements from an array

console.log('*****Splice')

let spliceArray: string[] = ['Ali', 'Gul', 'Rahdari']
console.log(spliceArray.splice(1, 0, 'Mansoob'))
console.log(spliceArray)

console.log(spliceArray.splice(1, 1, 'Ahmed'))
console.log(spliceArray)

console.log(spliceArray.splice(2, 1, 'Usman'))
console.log(spliceArray)

console.log(spliceArray.splice(2, 2, 'Mansoob'))
console.log(spliceArray)

// toString()

console.log('*****toString')

let toStringArray: number[] = [1, 2, 3, 4]
console.log(toStringArray.toString())

// filter() - This method can also be used in multiple use cases. Like, such as
// Finding even numbers from an array, finding common items from two arrays, or getting a distinct array.

/* Even No using filter() */

console.log('*****Filter')

let values: number[] = [2, 3, 7, 8, 10, 12]
const resultFilter = values.filter((element) => element % 2 === 0)
console.log(resultFilter)

// reduce() Left to Right

console.log('*****Reduce and ReduceRight')

let additionArray: number[] = [1, 2, 3, 4, 5]
const sumLeftToRight = additionArray.reduce(
  (prevNum, currentNum) => prevNum + currentNum
)
console.log(sumLeftToRight)

// reduceright() Right to Left

let reduceRightArray: number[] = [5, 6, 4, 5]
const sumRightToLeft = reduceRightArray.reduceRight(
  (preNum, currNum) => preNum + currNum
)
console.log(sumRightToLeft)

// sort()

console.log('*****Sort')

let sortArray: number[] = [3, 10, 6, 8]
const resultSort = sortArray.sort((a, b) => a - b)
console.log(resultSort)

// fill() - This method changes all elements in an array to a static value, from a start index (default 0)
// to an end index (default array.length) and returns the modified array.

console.log('*****Fill')

let fillArray: number[] = [1, 2, 3, 4, 5]
console.log('result 1 : ', fillArray.fill(25626, 2, 4))
console.log('result 2 : ', fillArray.fill(25626, 2))
console.log('result 2 : ', fillArray.fill(25626))
