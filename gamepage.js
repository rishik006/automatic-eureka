var guess = 1

var y = Math.floor(Math.random() * 10+1)

var x = document.getElementById("guessField").value;


function sumbit(){
    if(x == y){
        alert("congratulations!!!"+player_name+"You guessed it right. Your guess is "+x+"Guess"+guess)
        guess = 1
    }
    else if(x>y){
        guess++;
        alert("Oops Sorry!! Try A smaller number")
    }
    else{
        guess++;
        alert("Oops Sorry!!! Try a greater number")
    }
}
  
function playAgain(){
    y = Math.floor(Math.random() * 10+1)
}


