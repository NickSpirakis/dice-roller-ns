//random dice roller function. makes a number and uses that to display an image. 
//each image name is a number 1 through 6, I just add the folder and .png to it.
function rollDice(){
    //die 1
    var firstDie = Math.floor(Math.random()*6)+1;
    var dieImageOne = "images/"+firstDie+".png";
    
    //die 2
    var secondDie = Math.floor(Math.random()*6)+1;
    var dieImageTwo = "images/"+secondDie+".png";

    //die 3
    var thirdDie = Math.floor(Math.random()*6)+1;
    var dieImageThree = "images/"+thirdDie+".png";

    //die 4
    var fourthDie = Math.floor(Math.random()*6)+1;
    var dieImageFour = "images/"+fourthDie+".png";

    //die 5
    var fifthDie = Math.floor(Math.random()*6)+1;
    var dieImageFive = "images/"+fifthDie+".png";


    //this is how we display the dice
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", dieImageOne);

    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", dieImageTwo);

    var image3 = document.querySelectorAll("img")[2];
    image3.setAttribute("src", dieImageThree);

    var image4 = document.querySelectorAll("img")[3];
    image4.setAttribute("src", dieImageFour);

    var image5 = document.querySelectorAll("img")[4];
    image5.setAttribute("src", dieImageFive);
}
//link to button
document.querySelector("button").addEventListener(autoFocus)