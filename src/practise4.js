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
// - put porperties inside, and each property will have its key value pair


// create objects in an array

const thesis = [
    { title: 'data & democracy', like:'30' },
    { title: 'big Beautiful', like:'40' },
    { title: 'poetic industry', like:'50' }
];

console.log(thesis);

let grace = {
       name: "Haijing",
       age:21,
       email:"liuh494@newschool.edu ",
       location:"shanghai",
       thesis:[ { title: 'data & democracy', like:'30' },
           { title: 'big Beautiful', like:'40' },
           { title: 'poetic industry', like:'50' }], // define property as an array
       // login: function(){
       login(){ //shorthand version
       console.log("the user logged in"); // method attached to the object
      },
       //logout:function(){
       logout(){
        console.log("the User logged out");
      },
       // keyword: this
       // this refers to the user object.
       // "This" is a context object & represents the context in which the current code is executed
       // logBlogs:function(){ // arrow function workd different in a this keyword and won't change it as an object, with this key word, arrow function won't work，and is index to the global window.
      logThesis(){
        this.blogs;
        console.log(this); // we see "this" refers to this object
        console.log(this.thesis); //without "this" we can not define, with "this" we get exactly where we are.
        console.log("This user has written the following blogs:");
        this.thesis.forEach(blogs =>{ //callback
          console.log(thesis.title, thesis.likes); //return each blogs defined in the objects.
        });
    }
};

// add methods to OBJECTS
// -- smilar with other datatype methods
// -- object methods have to define it in the object literal
grace.login();
grace.logout();

//grace.logBlogs();
grace.logThesis();

// eg. demo "this" in window object
//     -- "this" is contextual, and has different values in different code scopes.
//     -- "this" here, index the global & root context of our code
//     --  in JS we call the global context an window object
console.log(this);


const namename = "HAIJING";
const stupid = namename.toLowerCase(); //fyi string datatype methods
console.log(stupid); // always need another var to define & so don't repeat yourself


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

// Goodnight May the 1st.
// Keep Writting Code !
// 15:43

// May02

// Math Object
// - js has its own built-in Objects
console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area =7.4;

console.log(Math.round(area)); //round 函数 四舍五入约等于
console.log(Math.floor(area)); //floor 函数 向下取整
console.log(Math.ceil(area));  //Ceil  函数 向上取整
console.log(Math.trunc(area)); //trunc 函数 取整 truncate

//generate randomnums

const randoms = Math.random();
console.log(randoms); // random is initially a decimal num between 0-1
console.log(Math.ceil(randoms*100)); // turn random nums into random integers， can use round/floor/ceil/trunc



// Categorizing JS DataTypes
// Primitive & Reference Types

// -- Primitive Types: numbers, string, booleans, null, undefined, symbols
// -- Reference Type: all types of objects .eg, objects literals, arrays, functions, dates, all other objects.
// -- in a nutshell: Reference Type = Objects
// -- The difference of primitive type & reference type is how they stored.

// - Stack & Heap ｜ Concept of storing data in memory
// -- Concept of Stack
// --- storing primitive datatypes, quickly to access but limited
// ----- primitive stored data(value) locked variable names as an accessor, we use that variable name to index.
// -- Concept of Heap
// --- storing reference datatypes, more space & complex but slower
// ----- Storing objects
// --------- it adds a pointer to that object on the stack
// ----------- eg. a pointer in stack as arrays, locked the arrays's name in the pointer.
// ----------- 以 heap 方式被储存的 数组 命名后，在 stack 中以 pointer 指针 的方式储存此名

 // why pointer is essential ? that affects how we code

 let scoreOne = 50;
 let scoreTwo = scoreOne;
 scoreOne = 100;
 console.log(scoreOne,scoreTwo);
// ^ in JS we store those nums in stack as two different primitives with name scoreOne & scoreTwo in two different positions.
// ---- once scoreOne updated to 100 or any other value, we only have scoreOne updated in memory, and scoreTwo remains initial.

// ---- demo how pointer could be useful
const UserOne = {
  name: "Haijing",
  age:21,
  email:"liuh494@newschool.edu ",
  location:"shanghai",
};

// ^ userOne becomes a pointer in stack as primitive data.

// const UserOne{
//   name: "Haijing",
//   age:25,
//   email:"liuh494@newschool.edu ",
//   location:"New York",
// };

//what if the data inside this object updated ?

const UserTwo = UserOne;

// ^ userTwo becomes another pointer in stack that copies pointer UserOne
// & in Heap there's no new object created and stored
// --  once any data updated in the UserOne object
// --  both pointers with different names index to the Heap stored Object, & updated the data.


// Practise on primitive & reference types on stack && heap.

let score7 = 70;
let score13 = score7;

console.log(`score7: ${score7}`,`score13: ${score13}`);
score7 = 100;

console.log(`score7: ${score7}`,`score13: ${score13}`);
// ^ primitive duplicate won't change the redefined value.


// reference values

const folkOne = {name: "Jesus", age:32};
const folkTwo = folkOne;

console.log(folkOne, folkTwo);

folkOne.age = 33;
console.log(folkOne, folkTwo);

// ^ primitive duplicate won't change the redefined value.
