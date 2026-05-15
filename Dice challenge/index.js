
let firstnum = Math.floor(Math.random()*6) + 1
let randomimg1 = "./images/dice"+firstnum+".png";

let secondnum = Math.floor(Math.random()*6) + 1;
let randomimg2 = "./images/dice"+secondnum+".png";

let imgarr = document.querySelectorAll("img");
imgarr[0].setAttribute("src",randomimg1);
imgarr[1].setAttribute("src",randomimg2);


if(firstnum > secondnum){
    document.querySelector("h1").innerHTM ="Player 1 Wins !!" ;
} else if (firstnum == secondnum){
    document.querySelector("h1").innerHTML = "DRAW!!" ;

}
else{
    document.querySelector("h1").innerHTML= "Player 2 Wins !!" ;
}


