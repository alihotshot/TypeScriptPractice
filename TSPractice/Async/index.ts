// Callbacks


function doSomething(Callbacks) {
  console.log('Doing Somethings ...')
  Callbacks()
}

function doSomethingElse() {
  console.log('Do Something Else ...')
}

doSomething(doSomethingElse)
