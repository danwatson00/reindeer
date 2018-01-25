var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("reindeer");
console.log(hohohoElement);

var currentReindeer = reindeer.map(function (num, idx) {
    return colors[idx] + " " + num;
}); 

document.getElementById("reindeer").innerHTML += `<p>${currentReindeer}</p>`;
