var location1 = 3;
var location2 = 4;     // container that holds all the location of the real hit i.e location where the battleship is at
var location3 = 5;
 
var guess; // wont have value untill the user make a guess till then its undefine.
var guesses= 0; //contains the number guesses type the user
var hits=0; //number of real hit on the ship(i.e when the number enter by user matches the location of the ship then we have a hit)
// when compared to real location. when number hit 3 then the ship will sink

var isSunk= false; // default status of the ship ..i.e is not sunk


while ( isSunk==false){
    guess= prompt("Ready, aim, fire! (enter a number 0-6):");

// line 13 says it should continue looping while the ship is not sunk
//each time we loop through we ask user for guess using prompt
//prompt is built in function in browser use to get user to input data.
//prompt result is in form of string

if (guess<0 || guess >6){
    alert("please enter a valid cell number!");

}else {
    guesses++;


// line 21 check validity by making sure the guess is btw 0-6
//if the guess isnt valid we ll tell the user with an alert
//OR || operator combines the two tests so that if either test is true, then the entire conditional is true. if both tests are false, then the statement is false, and the guess is between 0 &6, which means its valid.

/*if (guess==location1){
    hits++;
}else if(guess==location2){
    hits++;
}else if(guess==location3){
hit++;
}*/
//  if the guess is at the location, then we hit the ship, then we increment
// optimizing line 32-38 we
 if (guess==location1 || guess==location2 || guess==location3){
    alert("HIT!");
    hits++;

 

if (hits==3){
    isSunk=true;
    alert("you have sank my battleship!");
   }

}else {
    alert("Miss");
        }
    }
}
//line 46 check to see if there 3 hits.
var stats = "You took " + guesses + " guesses to sink the battleship, " +
 "which means your shooting accuracy was " + (3/guesses);
alert(stats);