/*
primitive 

Number
10, 5.52, 35.6564

String
'My name is msi ' + "My name is MSI " + `My name is MSI`;

undefined
null

object
Array
Function
Object

*/


// ***********NUMBERS*************

var n = 758;
var f = 75.6;
var nn = Number("45.45");
console.log(nn);
console.log(Number.parseFloat(nn));
console.log(Number.parseInt(nn));

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log(1/0); // Infinity

console.log("MSI"*75); // NaN


// *********STRING*********

var str1 = "Hello World";
var str2 = 'Hello World';
var str2 = `Hello World`;

var str4 = String("ABD");
var str5 = String(758);
var str6 = String(75.5);

console.log(str4, str5, str6);

// *********BOOLEAN*********

var b1 = true;
var b2 = false;

var b3 = Boolean(true);
var b4 = Boolean(false);

console.log(b3, b4);


// **********NULL and UNDEFINED **********

var abc;
var std = null;

console.log(std);
console.log(abc);