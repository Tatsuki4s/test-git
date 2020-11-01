var ask = prompt("Сколько будет выбора: ")

var arrayWeek = [];

for (let i = 0; i < ask; i++) {
    arrayWeek[i] = prompt("ewqeqw");
}

const rtext = document.getElementsByClassName("rndtext")
var button = document.getElementById("click")
var repetButton = document.getElementById("repetclick")


// Выввод рандома
button.onclick = function alerka() {
    $(".rndtext p").remove();
    $(".rndtext").append("<p class=newrnd>" + arrayWeek[getRnd(0,arrayWeek.length)] + "</p>");
}

// ЗАНОВО
repetButton.onclick = function() {
    $(".rndtext p").remove();
    $(".rndtext").append("<p>Что же?</p>")
}


// Случайное число
function getRnd(Max,Min) {
    var num = Math.random() * (Max - Min) + Min;
    return Math.floor(num)
}



console.log(rndText);


