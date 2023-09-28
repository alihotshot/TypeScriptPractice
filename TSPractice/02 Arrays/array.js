"use strict";
/* ********************* 20 Array Methods in Typescript *************************** */
Object.defineProperty(exports, "__esModule", { value: true });
// Basics
var arrayBasic = [3, 4, 5, 6];
console.log(arrayBasic[2]);
var array1 = ['Ali', 'Haider']; //Alternative Correct Syntax
console.log(array1[1]);
var nullArray = []; // Null Array
nullArray.push(12);
console.log(typeof nullArray);
// indexOf()
console.log('*****IndexOf');
var arrayOne = ['Ali', 'Ahmed', 'Abuzar', 'Ammar'];
console.log(arrayOne.indexOf('Test')); //-1
console.log(arrayOne.indexOf('Abuzar')); //2
console.log(arrayOne.indexOf('Ahmed') !== -1); //true
// lastIndexOf()
console.log('*****LastIndexOf');
var arrayTwo = [2, 5, 8, 8, 10];
console.log(arrayTwo.lastIndexOf(8));
console.log(arrayTwo.lastIndexOf(10));
// map()
console.log('*****Map');
var mapArray = [2, 1, 6, 8];
var doubled = mapArray.map(function (num) { return num * 2; });
console.log(doubled);
// concat() - combile array elements
console.log('*****Concat');
var countArray1 = [1, 2, 3];
var countArray2 = [4, 5, 6];
console.log('Result : ', countArray1.concat(countArray2));
// join() - Join with an operator/given symbol
console.log('*****Join');
var joinArray = ['Ali', 'Mansoob'];
console.log('Joined Array: ', joinArray.join('**'));
// push() & pop()
console.log('*****Push & Pop');
var pushArray = [45, 78, 90];
console.log(pushArray.push(25));
console.log(pushArray);
console.log(pushArray.pop());
console.log(pushArray);
// Reverse()
console.log('*****Reverse');
var reverseArray = ['Haider', 'Ali'];
console.log(reverseArray.reverse());
// shift() - It is the opposite of pop() and remove first element of array
console.log('*****Shift');
var shiftArray = [1, 2, 3, 4];
console.log(shiftArray.shift());
console.log(shiftArray);
// unshift() - It is the opposite of shift() and add first element of an array
console.log('*****UnShift');
var unshiftArray = [2, 3, 4];
console.log(unshiftArray.unshift(1));
console.log(unshiftArray);
// slice() - Slice an array btw index
console.log('*****Slice');
var sliceArray = [1, 2, 3, 4, 5, 6];
console.log('Slice Array: ', sliceArray.slice(2, 5));
console.log(sliceArray);
// splice()-  This method can be used for multiple purposes. For, Add/ Replace/ Remove
// Add an element to an array, Replace specific elements within an array, Remove specific elements from an array
console.log('*****Splice');
var spliceArray = ['Ali', 'Gul', 'Rahdari'];
console.log(spliceArray.splice(1, 0, 'Mansoob'));
console.log(spliceArray);
console.log(spliceArray.splice(1, 1, 'Ahmed'));
console.log(spliceArray);
console.log(spliceArray.splice(2, 1, 'Usman'));
console.log(spliceArray);
console.log(spliceArray.splice(2, 2, 'Mansoob'));
console.log(spliceArray);
// toString()
console.log('*****toString');
var toStringArray = [1, 2, 3, 4];
console.log(toStringArray.toString());
// filter() - This method can also be used in multiple use cases. Like, such as
// Finding even numbers from an array, finding common items from two arrays, or getting a distinct array.
/* Even No using filter() */
console.log('*****Filter');
var values = [2, 3, 7, 8, 10, 12];
var resultFilter = values.filter(function (element) { return element % 2 === 0; });
console.log(resultFilter);
// reduce() Left to Right
console.log('*****Reduce and ReduceRight');
var additionArray = [1, 2, 3, 4, 5];
var sumLeftToRight = additionArray.reduce(function (prevNum, currentNum) { return prevNum + currentNum; });
console.log(sumLeftToRight);
// reduceright() Right to Left
var reduceRightArray = [5, 6, 4, 5];
var sumRightToLeft = reduceRightArray.reduceRight(function (preNum, currNum) { return preNum + currNum; });
console.log(sumRightToLeft);
// sort()
console.log('*****Sort');
var sortArray = [3, 10, 6, 8];
var resultSort = sortArray.sort(function (a, b) { return a - b; });
console.log(resultSort);
// fill() - This method changes all elements in an array to a static value, from a start index (default 0)
// to an end index (default array.length) and returns the modified array.
console.log('*****Fill');
var fillArray = [1, 2, 3, 4, 5];
console.log('result 1 : ', fillArray.fill(25626, 2, 4));
console.log('result 2 : ', fillArray.fill(25626, 2));
console.log('result 2 : ', fillArray.fill(25626));
