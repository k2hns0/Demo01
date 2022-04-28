var subjects= ["physics","biology", "chemistry"]; //First container or db that holds the subjects
var marks = new Array(); // second container that holds the value inputed by the user
//var num1;
for(i=0; i<subjects.length; i++){
    marks[i]= parseFloat(prompt ("enter your marks in:" +" " + subjects[i]))
   // marks[i]=num1;
}
// if the condition of the for loop is true. the window will ask for the subject mark from the user 
//then store the value in marks container.

/*
creating an app to tell each student to input there marks then store it.

var subjects= ["physics", "math", "biology"];

var marks=();
 for(i=0; i<subjects.length; i++){

    marks[i]= parseInt(prompt("enter your mark in "+ " "+ subjects[i]))
 }