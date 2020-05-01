// Modern JavaScript Tutorial #4 - Functions
// Youtube reference: www.youtube.com/watch?v=xUI5Tsl2JpY
// All JS codes are followed with Youtube Bogger: TheNetNinja 's Tutorial

// ** understand functions **
// - function helps us find a block of codes to execute what we want.
// - box of code inside and do specific things.
// - whenever we want we can create a function to run sth
// - we can also pass values inside functions, funcions do things with these values.
// --- eg: take geolocation coordinates inside functions & to convert them into real address
// - there are small differents with functions & methods, methods are functions.


// let's prectise

// function declaration & function expression
// ! function declaration
// -- no semicolon after function declarations

function goodnight(){
  console.log("We love universal value"); // we just wrote the function but have not yet call it
}

goodnight(); //run the function
goodnight();
goodnight();

//  function expression
//  -- we only do semicolon ; at the end of a function expression
//  -- we don't do that with function
//  -- by using function expression we store function inside a variable

const speak =  function(){
 console.log("nightynight!");
};

speak();
speak();

// - functions are all declared (function declaration) go before all the other javascripts
// -- that means javascript will highest "function declarations" other than else, such as "function expressions"
// -- you can write wherever the function declaration code you want in JS but its logically not neat & clear
// -- By using "function expression" instead of "function decaration"
// --- we declare it first before we using them and without js' own highest.

// -- done for function declaration & function expression --



// arguments & parameters
// - asign variables in functions
// - arguments passing values into parameters

const bark = function(name){ //parameter, in this case no defualt value.
  console.log(`have a good day ${name}`); //now we see template string again.
}; //name variable has the scope of this function

bark("Haijing"); //input "Haijing" as a value to assigned be inside the variable we defined in our function.
//aka argument

const doubled = function(cities ="London", time="Good night"){

  console.log(`hello ${cities}`,time);
};

// console.log(`hello ${cities}`,time); //this will fail(error), variables can not be console.logged outside of this function codeblock. since its defined locally.
doubled("shanghai","Good morning");
doubled(); // in case of undefined we'd do some default values.


// more practice
const corona = function(name="SARS-Cov-2", life="228908"){

   console.log(`CoronaVirus AKA ${name} has taken`,`${life} lives`);
};

corona();

// -- done for arguments & parameters --



// returning values
// - when we want to have a function that could actually return a value to us
// - instead of we assigning values inside of it.
// - return helps us receive this value, so we can deal with it later on.

const calcInfinite = function(whatever){ // here we've created a parameter called radius.

   const pi = 3.14;
   // let infinite = pi * whatever ** 2 ; //** == squared or powered
   // with this created variable, means now we have that area value.

   return pi * whatever ** 2 ; // we can return it directly without store it locally first. A SIMPLE WAY
   // console.log(area); // this could work, but we won't use.
   // cuz console.log(area) won't help in storing data/values out of this codeblock
   // console.log(area) without storing it anywhere else than locally.

   // so if we want to use the value/data later on outside of this function.
   // we use return to make it happen

   // console.log(infinite);

   // return infinite; // in this case we want to return the variable area.

};


// calcArea(8); //in return, we are not calling the variable with values anymore,instead we returning a value.

const Inf = calcInfinite(5);  //store the returned value(area) in a variable  with global scope
console.log(Inf);


// -- done for return values --


// Arrow Functions

// - a more modern edition of JS
// - offers a cleaner & shorter way to write functions
// - don't have to declare "function" firstly
// - and is started with parethesis () after the equal symbol =
// - simplified ways to write functions

const calcInfinite2 = (whatsever) => { // we need parenthesis with more than one parameter.
// const calcInfinite2 = whatsever => { // even without parenthesis code works, !and only applicable when we only have one parameters.
// const calcInfinite2 =() => //but when there is no parameter, we always need the parenthesis symbol to make sure the function is not an err.
const pi = 3.14;
return pi * whatsever ** 2 ;
};

const Infs2 = calcInfinite2(5);
console.log("CalculatedInfinity is", Infs2);

// something we can even do more radically

const calcInfinite3 = whatsSoever => 3.14 * whatsSoever ** 2 ; // in this case we returned (3.14 *whatsSoever **2 )
const Infs3 = calcInfinite3(5);

console.log("CalculatedInfinity is", Infs3);

// notes done @20:30 of the video && we will continue tmr good night sweety.
// Stayfocused & be the one

// GoodAfternoon May 1st

// Practice of Arrow functions
// regular way
const greet = () => "hello world";
const result = greet();
console.log(result);

const bill = function(products, tax){
let total = 0;
for (let i =0; i< products.length; i++){
total += products[i]+products[i]*tax;
 }
return total;

};

console.log(bill([10,15,30],0.2));

//arrow function way

const billx =(products,tax) => {
  let total =0;
  for (let i =0; i< products.length; i++){
  total += products[i]+products[i]*tax;
   }
   return total;

}

console.log("arrow function result", billx([10,15,30],0.2));

// ---done for intro of arrow functions ---



// functions & methods
// - synonymous & different
// -- methods are essentially functions

const empty = "in the begining";

// functions
// - a block of code do something that can be invoked and run at any point in our code
// - functions are themselves

const greetings =() => "hey there";
let outputOne = greetings(); // store thr result, we use function name & parenthesis to invoke

console.log(outputOne);

// methods
// - do something for us on datatypes like, strings & nums, boolean
// -  ! way we invoke them & how they are defined.
// -- ! .() dot notation is how we invoke it..
// --- this means methods are associated with an object, while functions are not.

let resultTwo = empty.toUpperCase();
console.log(resultTwo);

// -- done for intro of methods & functions --


// callbacks & foreach
// - we can pass values/arguments into functions/methods, when we invoke them


// callback function
// - pass an function as an arguments is a callback function
// -

const myFunc =(callbackFunc) => {
 // do something
 let value =50;
 callbackFunc(value);
};

// myFunc(function(value){ //declare that parameter //we then used callbackFunc() to callback this function in the previous one

myFunc(value =>{ // with arrow function syntax

  console.log("my callback function's value is",value);
});

// above are the general premise of a callback function
// -- 一般来说，只要参数是一个函数，那么这个函数就是回调
// -- done for callback --



// forEach method
// - forEach is a method which iterates over an array, a bit like loop.

let folks =["haijing","alice","sarah","adam","matt","leo","liz"];

// folks.forEach(function(individual){
// above is the regular way of writting functions
folks.forEach(individual => {
  console.log(individual);
 });

// define a callback function somewhere else and to pass it into the forEach method
// - using callback functions passing values into methods

 const logNames = (Persons, index )=>{
 //
   console.log(`${index}-hello ${Persons}`); //stringtemplate
 };

folks.forEach(logNames);

// passing more values/elements (property,such as index & length)
folks.forEach((xxx, index, length) => {
  console.log(xxx, `number: ${index}`,length);
 });

// get a reference to the "ul"
//   -- get a reference of an element on the page.
//   -- to inject an html element, use document query

const ul = document.querySelector(".CoolFolks"); // .CoolFolks are CSS selector

let CoolFolks =["haijing","alice","sarah","adam","matt","leo","liz"];

let html5 =``; // let html becomes empty template string

CoolFolks.forEach(coolperson =>{

  // to create html template for each person
  //    -- html5 += means to append this html for each person;
  //    -- "+=" take the current value of the html & adds them to the CoolFolks string.
  //    -- concatenate this html to the CoolFolks string;

html5 +=`<li style="color: purple">${coolperson}</li>` ; // by this html5 would look like li tags.

});

console.log(html5);
