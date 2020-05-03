// Modern JavaScript Tutorial #6 - The Document Object Model
// Youtube reference: https://www.youtube.com/watch?v=wKBu_dEaF9E
// All JS codes are followed with Youtube Bogger: TheNetNinja 's Tutorial


// Interacting with browser
// add content to the browser
// change css style
// react to user events (eg.clicking)
// cool effects like popups
// improving internet user experience is the initial purpose
// that javascript has been originally created.

// Document Object Model (DOM)
// Add, Change & Delete Content
// Make a cool pop-up effect in the web page



// Intro DOM
// - heart of webpage manipulation
// - essentially create by the browser when an html document loads inside it
// - interact with HTML document from our javascript code to do things
// - browser models html document, so it's called "document" object model
// - DOM contains many properties & methods we can use to interact with the html5


// - now try input document // document.location // document.URL // document.getElementById('id')//document.getElementByClass
// - hierachy tree of models, all elements in html are considered as nodes in DOM
//   --- html （root node）
//   --- head
//   ---- title (textnode)
//   --- body
//   ---- h1, div (elementnode )
//   ----- p (textnode)

// manipulating with DOM

// which element we want to manipulate with ? reaching to the DOM

// css selector as string
const  para = document.querySelector('p') ;//grab an element from DOM , in this case the first p tag
console.log(para);

const para2 =document.querySelector('.CoolFolks'); // index class
console.log(para2);

const para3 =document.querySelector('div.CoolFolk'); //way to define the unique css element manually
const para4 =document.querySelector('body > div.CoolFolk');
console.log(para3,para4); // by using browser to get unique css selectorVaue. in this case is "body > div.CoolFolks"

// grab mutile elements
const paras = document.querySelectorAll('div');// get all css slector elements with "div" tag
const parapara = document.querySelectorAll('p');

console.log(paras);
console.log(parapara);  // In DOM we have NodeList [p,p,p] which is array alike, but we can not use arraymethods to it
console.log(parapara[0]);  // Group of elements/nodes, like Array, we use [] to index sequences

parapara.forEach(lovely =>{
 console.log(lovely);
}); // we can also use forEach

console.log(parapara[0]);

const liberty = document.querySelectorAll('.CoolFolk');
console.log(liberty);

//querySelector & querySelectorAll on DOM grab elements from css


// getElementById &getElementsByClassName('className')

// get and elements by ID
const PageTitle = document.getElementById('Page-Title');
console.log(PageTitle);

// get element by their class name
const folkfolks = document.getElementsByClassName('CoolFolk');
console.log(folkfolks);

// HTMLColection & NodeList smiliar but not identical
// - nodelist get single element by using [] & using ForEach
// - ForEach could not be used in HTMLCollection

// get element by their tag name

const p = document.getElementsByTagName('p');
console.log(p);
console.log(p[2]);


// change text

const titletitle = document.querySelector('#Page-Title');

console.log(titletitle.innerText); //innerText is a propertyname
// titletitle.innerText = "Practise makes awesome !"
titletitle.innerText += " & awesome !" // append extra text "awesome"

const allall = document.querySelectorAll('p');
allall.forEach(all =>{
  console.log(allall.innerText)
  p.innerText += "!!";
});
