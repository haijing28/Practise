
// simple practise
alert(" Practice makes Perfect");
console.log("hello world");

let age =25;
let year = 2019;

console.log(age,year);

age = 55;
console.log(age);

const system = "could be better";
// system = 500;
console.log(system);

// to commentary to be an adult
var beautifulScore = "anything";
console.log(beautifulScore);

// we use strings to store data
// strings

console.log("hello,world again");

let email = "liuh494@newschool.edu";
console.log(email);

// string concatenation

let firstName = "Haijing";
let lastName = "CoolCool";

let fullName =firstName + " " +lastName;
console.log(fullName);


// getting characters
console.log(fullName[0]);

// string length (length is defined as a property)
// property doesn't need ()as how methods do
console.log(fullName.length);

// string methods
// methods are functions associated with a specific datatype or objects
// don't forget the dot stuff,method requires () on the end of it, unlike property.
// final value of methods won't ulter the variable itself.

console.log(fullName.toUpperCase());

let lower = fullName.toLowerCase();
console.log(lower);

// datatype symbol, common understanding is a parameter
// technically when we pass an value in the methods, we call it an argument,
var index = email.indexOf("@");
console.log(index);

// debriefing string:
// strings are series of numbers and letters go inside quotes have properties & methods.
// property: we use dot notation to get this properties like length.
// method: built-in snippets of code that do things for us.

// common string methods training
let emailNext = "haijing@outlook.com";

//lastIndexOf
let calm = emailNext.lastIndexOf('o');
console.log(calm);

//slice
let great = emailNext.slice(4,10);
console.log(great);

//substr
let coolcool = emailNext.substr(4,10);
console.log(coolcool);

//replace
let replace = emailNext.replace("o","c");
console.log(replace);



//++ NOW ITS TIME FOR NUMBERS & MATHS ++
// data type: numbers

let radius = 10;
const pi = 3.14;

console.log(radius,pi);

// math operators +, -, *, /, **, %,
console.log(10/2);

let percentage = radius % 3;
console.log(percentage);

let times = pi * radius ** 2;
console.log(times);

// order of operation -   B I D M A S
let something = 5 *(10-3)**2;
console.log(something);

let likes = 10;
//likes =likes+ 1; double plus shorthand version ++
//likes ++;
//likes --;

likes += 7;
// like is plus equal to 10 (shorthand way)
// & plusequal means to take defined value to add on current value
console.log(likes);

likes -= 5;
// & minusequal means to take defined value to minus on current value
console.log(likes);

likes *= 100;
console.log(likes);

likes /=20;
console.log(likes);

likes ++ ;
console.log(likes);
// all shorthand notation


// NaN - Not a Number

console.log(5/"hello"); //calculation doesnt have number result. prop error

//proper way to concatenate numbers

let veryImpressive = "My Instagram Post have "+ likes +' WoW ';
console.log(veryImpressive);


// & letsmakeitsimple concatenate
// different version of a string "const"



const title = " Bible is written by God ";
const author = " UniverseCreator ";
const compliment = 1000;

// concatenation way
let experiments = "The Truth Called" + title + "by" + author + "has " + compliment + " likes" ;
console.log(experiments);

// template string way $ & backticks
// Template strings:
// inject variables into the string
// without having to exit out using the plus sign to concatenate them.

let better = `The truth called ${title} by ${author} has ${compliment} likes`;
console.log(better); // using backticks to replace single or double quotes

// using template string way to
// create html templates
let html =`
<h2>${title}</h2>
<p>By ${author}</p>
<span>The truth has ${compliment}likes </span>
`;

console.log(html);


 // Array Storing the collection of data relating to eachother, javasript is a 0 based language
 // Array Sytax variable = ["xx","xx","xx"]

let haijing = ["Unique", "Beautiful", "Creative", "Smart"];
console.log(haijing);

haijing[3] = "Empathetic"; // overwrite position values
console.log(haijing[3]);

let ages =[20,25,30,35];
console.log(ages[2]);

let random =["Unique","Beautiful",30,20];
console.log(random);

console.log(haijing.length);

// array methods intro

let see = haijing.join(","+ `${likes}`);
console.log(see);
