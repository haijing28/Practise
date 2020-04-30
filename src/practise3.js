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

   let infinity = pi * whatever ** 2 ; //** == squared or powered  

   // with this created variable, means now we have that area value. 

   // console.log(area); // this could work, but we won't use. 
   // cuz console.log(area) won't help in storing data/values out of this codeblock
   // console.log(area) without storing it anywhere else than locally.  

   // so if we want to use the value/data later on outside of this function. 
   // we use return to make it happen 

   console.log(infinity);
  
   return infinity; // in this case we want to return the variable area. 

};


// calcArea(8); //in return, we are not calling the variable with values anymore,instead we returning a value. 

const In = calcInfinite(1);  //store the returned value(area) in a variable 

console.log(In); 


