/* ********************* 20 Array Methods in Typescript *************************** */

// indexOf()

let arrayOne: string[] = ['Ali', 'Ahmed', 'Abuzar', 'Ammar']
console.log(arrayOne.indexOf('Test')) //-1
console.log(arrayOne.indexOf('Abuzar')) //2
console.log(arrayOne.indexOf('Ahmed') !== -1) //true

// lastIndexOf()

let arrayTwo: number[] = [2, 5, 8, 10]
console.log(arrayTwo.lastIndexOf(5))
console.log(arrayTwo.lastIndexOf(10))


