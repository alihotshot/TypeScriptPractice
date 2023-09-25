/***WHY TypeScript & Variables: https://chat.openai.com/share/7b44103d-fce9-442b-93b7-645f08c2d54f */

let old_age: number = 28
const old_id: number = 53419
const old_name: string = 'Ali Haider'
let old_city: any = 'Rawalpindi'
let result = `Hello my name is ${old_name} and Age is ${old_age}`

// Type Inference
let new_age = 30
const new_id = 25626

// Type Annotation
let _age: number = 32
const _id: number = 53494

// TS Union Types
let signal: string | boolean
signal = 'Red'
signal = 'Green'
signal = true

// Type Aliases - Custom Types for Variables
type Student = {
  name: string
  age: number
  marks: string | number
}

let ali: Student = { name: 'Ali Haider', age: 28, marks: '3.8 CGPA' }

// typeof - You can check the data type
console.log(typeof _age)

/* Operators in TS: https://chat.openai.com/share/9591aed1-a747-47ad-a70a-054c831997ea */
