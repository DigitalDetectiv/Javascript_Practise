var name = prompt("What is your name")
//Capitalising the first letter
var firstChar = name.slice(0,1).toUpperCase();

//The final name concatenated with the rest(used chaining of the functions)
var captitalisedName = firstChar + name.slice(1,name.length);
alert("Hello " + captitalisedName +" !!")