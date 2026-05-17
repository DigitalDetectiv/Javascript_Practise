// $(document).ready(function(){
//     $("h1").css("color","#c73184ac");
// $("h1").css("font-size","100px");



// }); //calss the code once the juery libarry has finished loading if put in the sart


//.addClass            to add class
//.text                for text and .html for innerHTML
//.attr                 for attribute
//.before              creater innerthmtl after and before

//.prepend and .append  get added to the in betee the tags content.....
// difference is before and append do it before and after but the other oeds it inbetween


 $("h1").addClass("big-title margin-50");
  // adds both and to remove .removeClass();
//  $("h1").hasClass("margin-50"); //shows if there is a class in the console

$("button").text("Dont Click Me!!"); // this selects all matched elements;
// this is for text

$("button").html("<em>Click Me</em?") // for innerHTML
  
//get and set attributes on jquery on the fly
$("img").attr("src"); // we can console.log this result


/// set the url at anchor tag
$("a").attr("href", "https://www.udemy.com/");
$("a").html("UDEMY Link");


// function on clicking - event listneres
$("h1").click(function(){
    $("h1").css("color", "#847cf3");
});

// for all the buttons 

// for(let i = 0; i <6; i++){
//     document.querySelectorAll("button")[i].addEventListener("click", function(){
//         document.querySelector("h1").style.color =  "#847cf3";
//     });
// }

$("button").click(function(){
    $("h1").css("color","#847cf3");
});

$(document).keypress(function(event){
    $("h1").html(event.key)
    
});


//another  way to detct and give eventlistenere

$("h1").on("mouseover", function(){
    $("h1").html("Hello There!!");
});

//hide

$("button").on("click", function(){
    // $("h1").hide();

    $("h1").animate({opacity : 0.7}); //only numeric values possible
    // $("h1").animate({opacity : 0.7}); //only numeric values possible

    $("h1").slideUp();
    $("h1").slideDown();

    $("h1").fadeOut();
    $("h1").fadeIn();

    $("h1").slideUp().slideDown().animate({opacity : 1});


});
