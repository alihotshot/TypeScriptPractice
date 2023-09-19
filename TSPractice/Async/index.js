//Promises Notes Link: https://docs.google.com/document/d/19hpL-Dw4JgE-Dn1h_yc22rlJgJp_l42U8o4Wr0-0nKw/edit?usp=sharing
/* Class Practice */
//Normal Execution
// Weekend Example
/*
- Car Maintenance
- Laundary Dress
- Attend Event
*/
console.log('I leave my car at 09:00 in Workshop...');
console.log('Your Dress is Ready');
console.log('Attend Event');
/* Callbacks */
function doSomething(Callbacks) {
    console.log('Doing Somethings ...');
    Callbacks();
}
function doSomethingElse() {
    console.log('Do Something Else ...');
}
doSomething(doSomethingElse);
