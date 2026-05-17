function addEventListener_practise(typeOfEvent, callback ){
    var eventHappened = {
        eventType : "keypress",
        key : 'p',
        durationOfPress : 2
    }

    if(eventHappened.eventType == typeOfEvent){
        callback(eventHappened);
    }
}




addEventListener_practise("keypress", function(event){
    console.log(event);
});

//try this in the console of web browser
// this is what happens when we do 
/*

    document.getElementById("id").addEventListener("keypress", function(event){
    someFunction(event.key); // where the key that is learned fromt he event initialised by the broswer is read and given as input into the functoin
    })

*/