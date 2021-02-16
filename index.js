function rollDice(){
    var firstDie = Math.floor(Math.random()*6)+1;
    var dieImageOne = "images/"+firstDie+".png";
    

    var secondDie = Math.floor(Math.random()*6)+1;
    var dieImageTwo = "images/"+secondDie+".png";


    var thirdDie = Math.floor(Math.random()*6)+1;
    var dieImageThree = "images/"+thirdDie+".png";


    var fourthDie = Math.floor(Math.random()*6)+1;
    var dieImageFour = "images/"+fourthDie+".png";


    var fifthDie = Math.floor(Math.random()*6)+1;
    var dieImageFive = "images/"+fifthDie+".png";



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

document.querySelector("button").addEventListener(autoFocus)