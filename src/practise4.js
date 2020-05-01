// Modern JavaScript Tutorial #4 - Objects
// Youtube reference: https://www.youtube.com/watch?v=X0ipw1k7ygU
// All JS codes are followed with Youtube Bogger: TheNetNinja 's Tutorial


//  Intro to OBJECTS
//  what is an Object ?
//  comparing it with objects in the real life.
//  real object, eg, a phone, has properties (eg: -color, -size, -model, -etc),
//                           has function (or 'd say has things todo, eg: -ring, -take a photo, -make a call, -etc)

//  Objects in javascript have properties & things they can do(methods)

//  JS Object
//  eg1. a User Object
//    - Properties: emailaddress, username, gender
//    - Methods: login, logout
//  eg2. a Blog Object
//    - Properties: title, content, author
//    - Methods: publish, unpublish, delete


// The idea of Objects allows us to create data-structures represent certain things in our code or web applications
// Javascript has its owen built-in objects, such as date Object, math Object
// JS also allows us to create our own Objects by using different methods
// Using Object Literal Notation to create individual Objects


// Object Literals
// - {} we use curly brackets to make objects literal
// - as how we create array with [];

let grace = {
 name: "Haijing",
 age:21,
 email:"liuh494@newschool.edu ",
 location:"shanghai",
 blogs:["Haijing Design","Haijing Code"],
 login: function(){
  console.log("she's logged in"); // method attached to the object
},
 logout:function(){
  console.log("she's logged out");
}
 };  // put porperties inside, and each property will have its key value pair


// add methods to OBJECTS
// -- smilar with other datatype methods
// -- object methods have to define it in the object literal

grace.login();
grace.logout();


const namename = "HAIJING";
const stupid = namename.toLowerCase(); //fyi string datatype methods
console.log(stupid);


// . dot notation && [] square brackets notation help us to index
console.log(grace);
console.log(grace.blogs); //dot notation helps us index

grace.age = 32;
console.log(grace.age);
console.log(grace['email']); //square notation index method & using '' to index string format

grace['name'] = 'sarah';
console.log(grace['name']); //rewrite the key value
grace['name']='alice';
console.log(grace['name']);

// [] passing variables
const key = "location";
console.log(grace.key);  // will get undefined, value "key" is not a defined variable in the grace object
console.log(grace[key]); // [] will just index the value of variable "key"
console.log(typeof grace,"grace"); // check datatype
