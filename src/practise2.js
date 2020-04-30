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
  // logical operators: && AND, || OR
  // logical condition: logical NOT (!)

  const hisAge =101;
  if ( hisAge > 100){
    console.log("you are not 100 years old");
  }

  const places = ["berlin","shanghai","new york city","paris","stockholm","chengdu","taipei","sydney"];

  if(places.length >2 ){

    console.log("hello world");

  } // if the userisloggedin we shall check sth

  const password = "p@ss";

  if(password.length >=12 && password.includes("@") ){ //&& logical operator "and"
  console.log("that password is might strong");

  } else if (password.length >=8 || password.includes("@") ){ // || logicl operator "or"
      console.log("that password is strong enough");
  }

  // if(password.length >=8){
  //   console.log("that password is long enough");
  // }

  else{
    console.log("that password is not strong enough");
  }

  //check multiple different conditions at a time using elseif


  //logical NOT (!)
  // without logical not statement, conditional runs when its true only.

  let user = false;

  if(!user){
  console.log('hahahaha you must be logged in to continue');
  }
  console.log(!true); //false
  console.log(!false);//ture

  // break & continue

  const scores = [10,34,20,0,55,65,100,70,11,23];

  for(let a = 0; a < scores.length; a++ ){
    console.log("your score", typeof scores[a], scores[a]); //getnum
    console.log("your score", typeof `${scores[a]}`,`${scores[a]}`);//getstring

  if(scores[a]===0){
    continue;
  }

  console.log("jumpping 0",scores[a]);

     if(scores[a]===11){
       console.log("congrats, you are the second last one!");
       break; // this means the loop breaks at num "11",& "23" is not counted in this loop
     }

  }

  // will do switch on the last of April .
  // Good night

  // switch statement
  // checking multiple possible values of a single variable is to use switch statement.



  // const grade = "A";

    let grade = "50";

    grade = Number(grade);

    switch(grade){ // avoid of rewritting if else statement over & over again.

        case 50:
         console.log("You got an A!");  //using case
         break;

        case "B":
         console.log("You got an B!");
        break;

        case "C":
         console.log("You got an C!");
        break;

        case "D":
         console.log("You got an D!");
         break;

        case "E":
         console.log("You got an E!");
         break;

        default:
         console.log("not a valid grade");

    }


    // if we want to run switch propperly as how we wish
    // we should use "case" to index
    // and "break" to get the result that matches.


    // Intro: variable & block scope
    // code blocks run the brackets condition code are true

    const date = 430;// global scoped variable


    if(true){
      const  date = 501;
      const  surname = "smart";
      console.log("inside 1st code block",date,surname);

    if(true){
      const  surname = "haijing";
      console.log("inside the 2nd code block", date, surname );
      // var test = "Hey there";
     }

    }

    console.log("ouside code block", date);

    //var will ignore block scope. we can even access var after the code blocks
    //in this case we recommnd let & const to be the modern way of defining variables.

   //code practise done for Modern JavaScript Tutorial #3 - Control Flow
