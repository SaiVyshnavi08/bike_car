let bike = "./bike.jpg";
let car = "./red-car-with-eyes-on-on-a-sky-background-vector-27618083.jpg";
let auto = "./car.jpg"


console.log("Hello world!");

let image = document.getElementById("photo");

let source = image.src ;

let list = source.split("/")

let present = list[list.length-1];

setTimeout(() => {
    if(present === car){
        image.src="./" + bike;
    }
    else if(present=== bike){
        image.src="./"+ auto;
    }
    else{
         image.src="./"+ car;
    }
}, 3000)



