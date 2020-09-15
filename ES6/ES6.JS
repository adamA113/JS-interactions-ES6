/*you will be able to refactor code to use newer features
 of JavaScript.

 JavaScript has developed as a language,
  many features have been added to make it both 
 more powerful and to make it similar to other 
 programming languages. ECMAScript 6 -- 
 also known as ES6 or ES2016 -- is popular
  and powerful enough that it’s a requirement for
  current JavaScript developers.

In this lesson you will learn just some of the newest features that will change 
how you write JavaScript. While syntax can be difficult, it can be learned and is best
 mastered with lots of practice! */

//----------------- Classes ------------------------------//

class MyClass {
  constructor(name) {
    this.name = name;
  }
}

// the new keyWord will Call the constructor
var inst = new MyClass('hhh');

//---------------- Arrow Function -------------------------//

// if the function contains One line of code
var myFunction = (myname) => myname;

// ifthe fnction contains more than one line of cod
var myFunction = (myname) => {
  myname = '122';
  return myname;
};

//---------------- let + const ----------------------------//

var d = 0;
{
  //--------let is related to the block that vontains it
  //-------- and its not allowed to create tow variables with the same name
  let d = 200;
  console.log(d);
}

//--------- functions should be as a const variable since we
//--------- are not going  change its value ---------------
const myFunc = () => {};
//------------------ Default  ---------------------------//

//---------- we define an initial value for the function param
function defualtVlaue(x = 0) {
  return x;
}
var func = defualtVlaue();
//-------------Templet Strings ----------------------------//
var string = `the value in this string is: ${vlue}`;

//------------------ Spread Opeator ----------------------//

var MyInfoArray = ['Rami', 21, 'Developer'];
function myInfo() {
  for (var i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

myInfo(...MyInfoArray);

//-----------------------------------------------------------//
