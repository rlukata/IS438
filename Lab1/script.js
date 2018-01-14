alert("Hello, world");

var a = 5;
var b = 10;
var c = 20;
alert("Consider the following: a = 5, b = 10, c = 20")
alert("Now let's try the following: a++, b--, c += 10")
a ++ ;
b--;
c += 10;
alert("Let's check it out: " + a + " , " + b + " , " + c)

var name = prompt("Again, what is your name?");
var message = "Printing variables: Hello, ";
alert(message + name);

var a = 123;
var b = "123";
alert("Let's compare the follwing: a = 123, b = '123'")
// equality check
if ( a == b ) {
   alert("Yes, they ARE equal");
} else {
   alert("No, they're NOT equal");
}

var a = 5;
var b = 10;
alert("Let's compare the follwing: a = 5, b = 10")
if ( a < b ) {
   alert("Yes, a is less than b");
}

if ( a == b ) {
   alert("Yes, a is equal to b");
}

var grade = "Premium";
alert("What's the price of Premium gas?")
if ( grade === "Regular") {
     alert("It's $3.15");
}
if ( grade === "Premium") {
     alert("It's $3.35");
}
if ( grade === "Diesel") {
     alert("It's $3.47");
}


var a = 5;
var b = 10;
var c = 20;
var d = a + b + c;
alert("Let's do math: a = 5, b = 10, c = 20, d = a + b + c;")
alert("The value of d is: " + d );