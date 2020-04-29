// Modern JavaScript Tutorial #3 Control Flow
// Youtube reference: https://www.youtube.com/watch?v=JloLGV9DmtQ
// All JS codes are followed with Youtube Bogger: TheNetNinja 's Tutorial


// Control Flow Briefs

// Use Loops for cycling through data
// ["bless""happiness""wedding"] looping toUpperCase()

// Use Conditional Statements for checking conditions
// if(some condition is true){ do sth...}


// for loops
//i=0 initializing, i<5 condition like true of false, i++ final epxression to exucte
for(let i =0; i< 5; i++){

console.log("in loop",i);

} //{} code block for that loop

console.log("loop finished");


const names = ["bless","happiness","wedding" ];

for(let i=0; i<names.length; i++){
  //console.log("in loop",i);
  //console.log(names[i]);
 let html =`<div>${names[i]}</div>`;
 console.log(html);

}

// while Loops
// syntax difference
// decalring the variable value before the function, add final expression in the code block

let d = 0;
while(d < 5){
console.log("in loop",d);
d++;
}


const cities = ["berlin","shanghai","new york city","paris","stockholm","chengdu","taipei","sydney"];

let city =0;

while(city < cities.length){
console.log("terminal",cities[city]);
city++;
 }

let coolplace =0;
while(coolplace < cities.length){
console.log("where are you?", `I am in ${cities[coolplace]}`);
coolplace++;
}

console.log("loop finished");

// do while loop
// the extension of while loop
// add condition that while won't work

let somestuff = 2;
do {
  console.log("val of i is", somestuff);
  somestuff++;
} while (somestuff < 5);

//***----- done for "loops" -----***


// if statements
// aka conditional statemenst
// sequencing: if statements; if else statements; if elseif else statesments

const hisAge =101;
if ( hisAge > 100){
  console.log("you are not 100 years old");
}

const places = ["berlin","shanghai","new york city","paris","stockholm","chengdu","taipei","sydney"];

if(places.length >2 ){

  console.log("hello world");

} // if the userisloggedin we shall check sth

const password = "p@ssw0";

if(password.length >=12 ){
console.log("that password is might strong");

} else if (password.length >=8){
    console.log("that password is long enough");
}

// if(password.length >=8){
//   console.log("that password is long enough");
// }

else{
  console.log("that password is not long enough");
}

//check multiple different conditions at a time using elseif
