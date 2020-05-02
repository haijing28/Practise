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

let grace = {
     name: "Haijing",
     age:21,
     email:"liuh494@newschool.edu ",
     location:"shanghai",
     blogs:["Haijing Design","Haijing Code","Haijing UX","Haijing Artsy","Haijing Technology"],
     login: function(){
     console.log("the user logged in"); // method attached to the object
   },
     logout:function(){
      console.log("the User logged out");
   },
     // keyword: this
     // this refers to the user object.
     // "This" is a context object & represents the context in which the current code is executed
     logBlogs:function(){ // arrow function workd different in a this keyword and won't change it as an object, with this key word, arrow function won't work，and is index to the global window. 
      this.blogs;
      console.log(this); // we see "this" refers to this object
      console.log(this.blogs); //without "this" we can not define, with "this" we get exactly where we are.
      console.log("This user has written the following blogs:");
      this.blogs.forEach(blogs =>{ //callback
        console.log(blogs); //return each blogs defined in the objects.
      });

  }
};

// add methods to OBJECTS
// -- smilar with other datatype methods
// -- object methods have to define it in the object literal
grace.login();
grace.logout();

//grace.logBlogs();
grace.logBlogs();

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
