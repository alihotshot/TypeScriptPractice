// //Promises Notes Link: https://docs.google.com/document/d/19hpL-Dw4JgE-Dn1h_yc22rlJgJp_l42U8o4Wr0-0nKw/edit?usp=sharing

// /************************* Class Practice */

// //Normal Execution
// // Weekend Example

// /*
// - Car Maintenance
// - Laundary Dress
// - Attend Event
// */

// console.log('I leave my car at 09:00 in Workshop...')
// setTimeout(() => {
//   console.log()
// }, 1000)
// console.log('Your Dress is Ready')
// console.log('Attend Event')

// // Now do above example by using Call Back Function

// function carMaintenance() {
//   console.log('Leave my car in Workshop at 09:00...')
//   setTimeout(() => {
//     console.log()
//   })
// }

// /* ****************************** Callbacks */

// function doSomething(Callbacks) {
//   console.log('Doing Somethings ...')
//   Callbacks()
// }

// function doSomethingElse() {
//   console.log('Do Something Else ...')
// }

// doSomething(doSomethingElse)

/* ******************************  Promises */

function carMaintenanceNew() {
  console.log('Leave my car at 09:00')
  let promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Car is fixed ...')
      resolve('Your Car is ready')
    }, 500)
  })
  return promise
}

function pickDressNew() {
  let promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Your Dress is ready')
      resolve('pick your dress')
    }, 500)
  })
  return promise
}

function attendEventNew() {
  let promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Now you can attend the event')
      resolve('Now you can go home')
    }, 500)
  })
  return promise
}

function BacktoHome() {
  let promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Now you can attend the event')
      resolve('reached home')
    }, 500)
  })
  return promise
}

let mechanicResponse = carMaintenanceNew()

mechanicResponse.then((text: string) => {
  console.log('Mechanic Response is ....', text)
  return pickDressNew()
})
