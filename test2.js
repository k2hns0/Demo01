/*var subject =["biology", "physics"];
var marks = new Array();
//for (i in subjects){} for-in --has two part in the bracket variable then object-which is the array. does same as for loop
for (i in subject){
    num = prompt("enter your mark in:" +" "+  subject[i]+ " " + "subject");
    marks[i] = parseInt(num);
    console.log(marks[i]);
} 

   // for (i in marks);{
  //      console.log(marks[i]);
  // }
*/
//while loop as long the cndition in the bracket is true the statement we execute.
//while (condition){}
//do{
//}         the task to be executed is return after do
//while(condition) then if the conditon is true it will execute for the second time else it will stop at the first.

/*var i =8;
while(i<10){
    console.log(i);
    i++;
}
do{console.log(i); 
}while(i<10)
// thee loop is perfect if you want the last array lenght or whatever to be executed eg 10*/
/*var name="joe";
var i=0;
while(i<2){
    document.write("happy birthday to you.<br>");
    i=i+1;
    
}document.write("happy birthday to you" + name + "<br>");
document.write("happy birthday to you.<br>");*/

var word="bottles";
var count=99;
while(count>0){
    console.log(count +" "+word +"of beer on the wall")
    console.log(count+" "+word + " of beer");
    console.log("take one down, pass it around");
    count--;

if (count>0){
    console.log(count +" "+word +"of beer on the wall")

}else{
    console.log("no more" +" "+ word + "of beer on the wall")
}
 
}

//my observation if statement condition count uses decrement from inner part of the while loop (count--), 
//i wasthink it wont use it though so why?
//i have an answer to it , when the first block of code execute it it loop through once tru 99 then the moment it decrease
//it start looping tru while and if statement too. 