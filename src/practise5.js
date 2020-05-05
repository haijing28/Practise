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
  console.log(all.innerText);
  all.innerText += '.';
});

// change html inside

const contenta = document.querySelector('.Content'); //get an reference of this,
console.log(contenta.innerHTML);

contenta.innerHTML = "<h2>Overwrite</h2>";
contenta.innerHTML += "<h3>Plus More</h3>";

// list of an array of people
const nouns = ["&#129315;","&#128007;","&#x1F31D;","&#x2744;","&#10084;","&#x2728;","&#x2614;" ]

nouns.forEach(emojis =>{
  contenta.innerHTML+= `<p>${emojis}</p>`;
});

// get & update attributes in HTML
//  - grabbing element of DOM & manipulate with js
//  - anhor tag
const links = document.querySelector('a');
console.log(links.getAttribute('href')); // getAttribute & passing arguments

// -- change CSS style
// -- getAttribute & setAttribute
const StyleOfH1 = document.querySelector('h1');
console.log(StyleOfH1);
console.log(StyleOfH1.getAttribute('style'));
StyleOfH1.setAttribute('style','color:#F5345D');

//change & set attribute
links.setAttribute('href','www.designlens.info');
console.log(links.getAttribute('href'));
links.innerText = 'DesignLens';

//  - p tag
const mssg = document.querySelector('p');
console.log(mssg.getAttribute('class')); // getAttribute & passing arguments
mssg.setAttribute('class','Cooler People');
console.log(mssg);

// == style.proppertyName = “Values”；
console.log(StyleOfH1.style);
console.log(StyleOfH1.style.color);

StyleOfH1.style.margin="50px";
StyleOfH1.style.color="#24C2F5";

console.log(StyleOfH1.style.margin);

//font-size: in JS fontSize
StyleOfH1.style.fontSize= "0.7em";
StyleOfH1.style.margin= ""; // remove orginally margin

// class in css & manipulate with JS

const cooolfolk =document.querySelector('div');
console.log(cooolfolk);
console.log(cooolfolk.classList);
cooolfolk.classList.add('CoolFolk');
cooolfolk.classList.remove('CoolFolk');
cooolfolk.classList.add('Content');

const trytrys =document.querySelectorAll('p');
console.log(trytrys);
console.log(trytrys.classList);
// trytrys.forEach(hahaha=>{
//   console.log(hahaha.innerText);
// });

trytrys.forEach(words=>{

  if(words.textContent.includes('Content')){
  console.log(words.textContent);
  words.classList.add('Content');
}
  if(words.innerText.includes('CoolFolk')){
  words.ClassList.add('CoolFolk');
  }
});


//46.25 bug would work on  
