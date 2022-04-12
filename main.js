// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.

const numtostring =( num1) => {
  num1 = String(num1);

  // document.getElementById("numtostring").innerHTML = currentDate;

  return num1; // must return the item to get string
 
}

numtostring(8)
console.log(numtostring(8) +"is a string line 26")
// Write a JavaScript program to convert a string to the number.

const stringtonum = (str) => {
  // num1 = Number(str);
  str = parseInt(str);
  return str; 
 
}

stringtonum("20 years")
console.log(typeof(stringtonum("20 years")) + "is a string line 37 string to num works");


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  
const datatype = (paraX) => {
    if (typeof paraX == "boolean"){ // typeof always returns a string, and to get boolean, have to put boolean in lowercase and in quotation
      console.log("This is Boolean!")
      return paraX;
    }
    if (typeof paraX == "object"){
      console.log("This is Null!")//******ASK MATT FOR THIS FUNCTION!!!!! */
      return paraX;
    }
    if (typeof paraX == "undefined"){
      console.log("This is Undefined!")
      return paraX;
    }
    if (typeof paraX == "number"){
      console.log("This is Number!")
      return paraX;
    }
    if (typeof paraX === "NaN"){ //****ASK MATT FOR THIS FUNCTION!!!!! */ Ex: 10*0 will return NaN
      console.log("This is Nan!")
      return paraX;
    }
    if (typeof paraX == "string"){
      console.log("This is String!")
      return paraX;
    }
}

console.log(typeof(datatype(true)) + "is a boolean line 75");
console.log(typeof(datatype(null)) + "is a Null line 76");
console.log(typeof(datatype(undefined)) + "is a undefined line 77");
console.log(typeof(datatype(8)) + "is a number line 78");
console.log(typeof(datatype(20/0)) + "is a NaN line 79");
console.log(typeof(datatype("hello")) + "is a string line 80")

// Write a JavaScript program that adds 2 numbers together.

const addition = (x,y) => {
    console.log(x+y);
    return x+y;
}

console.log(addition(3,5) + "is the sum for addition line 86")

// Write a JavaScript program that runs only when 2 things are true.

function twothingsRtrue(para1,para2) {
  if(para1 === true && para2 === true ){
    console.log("line 92 this is true.")
  }
  else{
  console.log("line94 this is false")
  }
}
twothingsRtrue(true,true);
console.log("line99 is true");

// Write a JavaScript program that runs when 1 of 2 things are true.

function EitherOneisTrue(para3,para4) {
  if(para3 === true || para4 === true ){
    console.log(" line 105 either para3 or para4 is true, requirement satisfy")
  }
  else{
  console.log("line108 this is false")
  }
}
EitherOneisTrue(true,false);
console.log("either one works");


// Write a JavaScript program that runs when both things are not true.  
function bothRFalse(para5,para6) {
  if(para5 !== true && para6 !== true ){
    console.log("ITEM checks out, line 118 both parameter are NOT true.")
  }
  else {
  console.log("didn't meet bothRFalse requirement, thus is true line 121")
  }
}

bothRFalse(true,false);
console.log("both R False line 126 is true");

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
