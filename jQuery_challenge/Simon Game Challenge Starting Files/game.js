
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

//3. At the top of the game.js file, create a new empty array with the name userClickedPattern.
var userClickedPattern = [];

// to check if started

let started = false;

let level = 0;

if(!started){
    start();
}
function start(){

    $(document).keypress(function(){
    if(!started){
    $("#level-title").text("Level "+ level);
    nextSequence();
    started = true;

    console.log(gamePattern);

        }
    });
}

// eventlistneer to the ubutons and adding to the user aray

$(".btn").click(function() {

var userChosenColour = $(this).attr("id");
userClickedPattern.push(userChosenColour);

playSound(userChosenColour);
animatePress(userChosenColour);

});

checkAnswer();


function checkAnswer(){
    if(gamePattern == userClickedPattern){
        // level++;
        nextSequence();

            console.log(userClickedPattern);

    }
}



//Compu sound
function nextSequence() {

    level++;
    if(started){
        checkAnswer();
    }
    $("#level-title").text("Level "+ level);


  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);
}


// sound function

function playSound(name){

    var audio = new Audio("./sounds/"+name+ ".mp3");
    audio.play();
    // console.log("./sounds/" + name + ".mp3");

   
}

function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    }, 100); //after 100 ms remove class
}



console.log(gamePattern);
console.log(userClickedPattern);


// //comput inpu===============================================       osund from simon    ==================================
// function nextSequence(){
//     let randomNumber = Math.floor(Math.random() * 4) ;
//     let randomChosenColor = buttonColors[randomNumber];
//     // gamePattern.push(randomChosenColor); as we keep thign seperated

//     $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
//     var audio = new Audio("./sounds/"+randomChosenColor+ ".mp3");
//     audio.play();

//     return randomChosenColor;
// }



// //event listener to all the buttons' ============================== getting the pressed input================

// function listening(){
//     $(".btn").click(function(){
//                 $(this).addClass("pressed");

//                 let userChosenColor = $(this).attr("id");   
                
                
//                 var audio = new Audio("./sounds/"+userChosenColor+ ".mp3");
//                 audio.play();

//                 //removing to flash
//                 setTimeout(function(){
//                     $(".btn").removeClass("pressed");
//                 },100)

                

//                 // console.log(userChosenColor); debug
//                 // $("h1").html(userChosenColor); debug
        
//                 return userChosenColor;
// });
// }
        






// alert("This is testing");

// console.log($("h1")); testing the jquery binding

//choosing the color - single========================

//creating array
/*
let buttonColors = ["red", "blue", "green", "yellow"];

//randomChosen Color to select the colors --> with the numebr
let randomChosenColor = buttonColors[nextSequence()];
console.log(randomChosenColor); //debug

//function to generate Random Numbers
function nextSequence(){
    let randomNumber = Math.floor(Math.random()*4);
    // console.log(randomNumber); debug
    return randomNumber;
}




//gaming pattern======================

let gamePattern = [];
gamePattern.push(randomChosenColor);
console.log ("Array : " + gamePattern);


// ================Box choices=======================

     //==========compu============ start ==  shows
        $(document).keypress(function(){
            $("."+randomChosenColor).addClass("pressed").;
            const sound = new Audio("'./sounds/'+randomChosenColor+'.mp3'");
            sound.play();
            //removing to flash
            setTimeout(function(){
                $("."+randomChosenColor).removeClass("pressed");
            },100)
        });




    



    let level = 1;

    for(let i = 0; i < level; i++){
        
        if(listening() != gamePattern[i]) {
            $("#level-title").html("Game Over Press any key to restart");
            break;
        }

    }




    


//levels====================
if(true){
    // go from each level 

} else {
    //game over
}


*/
