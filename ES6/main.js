/*you will be able to refactor code to use newer features of JavaScript.

 JavaScript has developed as a language, many
  features have been added to make it both 
 more powerful and to make it similar to other
  programming languages. ECMAScript 6 -- 
 also known as ES6 or ES2016 -- is popular 
 and powerful enough that it’s a requirement for
  current JavaScript developers.

In this lesson you will learn just 
some of the newest features that will change 
how you write JavaScript. While syntax
 can be difficult, it can be learned and is best
 mastered with lots of practice! */

//----------------------------------- Classes ---------------------------------//
var MyClass = function () {
  var inst = {
    values: 0,
    myfun: function () {},
  };
  return inst;
};

//--------------------------------- Arrow Function -------------------------//
function Myname(mayname) {
  return Myname;
}

//---------------------------------- let + const ----------------------------//
var d = 10;
{
  var d = 100;
}

//----------------------- Default parametrs value  ---------------------------//

function defualtValue(x) {
  var d = x || 0;
  return d;
}

//---------------------------------Templet Strings ----------------------------//
var value = 5;
var string = 'the value in this string is:' + value + '';

//---------------------------- Spread Opeator ---------------------------------//
function myInfo(name, age, job) {
  console.log(name, age, job);
}

//-------------------- IsNaN , isInteger , isFinite -----------------------//
