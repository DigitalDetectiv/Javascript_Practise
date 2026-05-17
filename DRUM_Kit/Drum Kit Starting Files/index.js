

for(let i =  0 ; i < document.querySelectorAll(".drum").length; i++){
    
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        
        soundFunc(this.innerHTML);
        buttonShadow(this.innerHTML);
    
    
    });
    



}

document.addEventListener("keypress",function(event) {


    soundFunc(event.key);

    buttonShadow(event.key);


});



function soundFunc(key){
        // alert("I got clicked");

        //console.log(this.innerHTML)
        // instead of i we can also use this.innerHTML 
        let sound;
            switch(key){
                
                case 'w':
                    sound = new Audio("./sounds/tom-1.mp3");
                    break;
                case 'a':
                    sound = new Audio("./sounds/tom-2.mp3");
                    break;
                case 's':
                    sound = new Audio("./sounds/tom-3.mp3");
                    break;
                case 'd':
                    sound = new Audio("./sounds/tom-4.mp3");
                    break;
                case 'j':
                    sound = new Audio("./sounds/crash.mp3");
                    break;
                case 'k':
                    sound = new Audio("./sounds/kick-bass.mp3");
                    break;
                case 'l':
                    sound = new Audio("./sounds/snare.mp3");
                    break;
                default:
                    sound = new Audio("./sounds/tom-1.mp3");

                    break;
            }
        
        sound.play();
    }


// document.addEventListener("keypress", soundFunc);



function buttonShadow(key){
    let activeButton = document.querySelector("."+key); //choosing thebutton
    activeButton.classList.add("pressed"); // transparent now
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100); // tells to activate this function after this much milliseconds


}

