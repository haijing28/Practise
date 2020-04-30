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

// ! function declaration
// -- no semicolon after function declarations

function goodnight(){
  console.log("I love universal value"); // we just wrote the function but have not yet call it
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
