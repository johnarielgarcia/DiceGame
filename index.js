var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var imageSrc = "images/" + "dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", imageSrc);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var imgSrc2 = "images/" + "dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", imgSrc2);

var description = ["Player 1 Wins", "Player 2 Wins", "Tie"]
if (randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = description[2];
} else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = description[0];
} else {
    document.querySelector("h1").innerHTML = description[1];
}