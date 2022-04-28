var location1=3;
var location2=4;
var location3=5;

var guess;
var guesses=0;
var hits=0;
var inSunk=false;
 while (inSunk == false){
     guess = prompt ("Enter your guess number here: (num btw 0-6)");

     if(guess<0 || guess>6) {
                alert("please enter a valid number")

      } else{

                    guesses++;


                }
                if (guess==location1 || guess==location2 || guess==location3){

                    alert("HIT")
                    hits++;
                } else {

                    alert("you miss fucker");
                }


                    if(hits==3){

                        alert("ouch fucker you sank my battleship")

                    }




 }
 var stats = "You took " + guesses + " guesses to sink the battleship, " +
 "which means your shooting accuracy was " + (3/guesses);
alert(stats);
