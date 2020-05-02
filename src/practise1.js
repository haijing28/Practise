// Modern JavaScript Tutorial #2 - Syntax Basics & Types
// Youtube reference: https://youtu.be/FhguwBJeqWs
// All JS codes are followed with Youtube Bogger: TheNetNinja 's Tutorial


// simple practise
alert(" Practice makes Perfect ");
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

let meaningful =["Unique","Beautiful",30,20];
console.log(meaningful);
console.log(haijing.length);

// array methods intro
// join() add values in array variables' between
let see = haijing.join(","+ `${likes}`);
console.log(see);

// Indexof()
let descriptions = haijing.indexOf("Smart"); // Note when a value is overwritten, IndexOf could not get that value and returns with "-1";
console.log(descriptions);

let valid = haijing.indexOf("Creative");
console.log(valid);

// concat()
// using concatenation to join arrays together
let beloved = haijing.concat(["cats","dogs","penguin","polarbear"]);
console.log(beloved);

//push() push on a new value onto the array
// what it does it to return the new length of the previous array
let productive = haijing.push("strong");
console.log(productive);
console.log(haijing);//in this case we have originally variable having a new value

//pop() what pop does it to change the end value.
let confidence = haijing.pop(); //that means we poped off value"strong".
console.log(haijing);

//* New Data Type *
// Chapter of " Null & undefined "
// represents without value, Null is for intentional & undefined is not.

let smart;
console.log(smart, smart+3, `the smart is ${smart}`); // example of undefined

let smartii = null;
console.log(smartii, smartii+3, `the smart is ${smartii}`); // example of null

// * New New DataType *
// Booleans True & False
// Booleans & comparisons
console.log(true,false,"string true","string false");

// methods can return booleans
let emailAfter = "haijing@icloud.com";
let nameNames = ["boys","girls","man","woman","baby"];

let thisResult = emailAfter.includes("@");
let thatResult =nameNames.includes("alien");

console.log(thisResult);
console.log(thatResult);

// comparison operators
// using comparison operators to compare two things together
// == ; != means true/false
// all belows returning booleans

let counts = 25;
console.log(counts == 25);
console.log(counts == 45);
console.log(counts != 30); //true

console.log(counts != 25); //false
console.log(counts < 10);
console.log(counts <= 25);


let userID = "haijing28";

console.log(userID == "haijing28");
console.log(userID == "Haijing28");
console.log(userID > "david"); //first alphet of h comes later than d, so this is true
console.log(userID > "Haijing");// lowercase is greater than capital cases, so this is true
console.log(userID > "David"); //lowercase is greater than all capitalcases (comes later then greater),so this is true.


// lets moveon and go deeper in comparison

let boyfriend = 100;

// operating methods - loose comparison (different types can still be equal)

console.log(boyfriend == 100);
console.log(boyfriend == "100"); // different datatypes (num, string ) can be equal,js itself do the evaluation
console.log(boyfriend != 100); //false
console.log(boyfriend != "100"); //principle loose comparison

// operating methods - strict comparison (different types can not be equal)
console.log(boyfriend === 100);
console.log(boyfriend === "100"); // a number can not equal to string.
console.log(boyfriend !== 100);
console.log(boyfriend !== "100");

// type coversion , turning one datatype into another datatype
let boyfriendplus = "99" ;
boyfriendplus = Number(boyfriendplus); //this is to turning string into number.
console.log(boyfriendplus + 1); //without conversion the result is 991,in this case we need type conversion, as above

console.log(typeof boyfriendplus); //if to comment out the type conversion then consolelog result would be string.

let nonsense = Number("nonsense");
console.log(nonsense); //NaN

let strings = String(99.9);
console.log(strings);
console.log(typeof strings);
console.log(strings, typeof strings); // number is blue in developer console, when its black that indicates string.

//typeconvert to boolean
let orfalse = Boolean(100);
let ortrue = Boolean(0);
console.log(orfalse, typeof orfalse); // true & boolean
console.log(ortrue,typeof ortrue);//false & boolean,in boolean positive/minus nums are True in values, zero is the false number.

//above are explicite typecovert methods
//there are also implicite JS does, behind the scene, JS will convert them .



//End of Modern JavaScript Tutorial #2 - Syntax Basics & Types
