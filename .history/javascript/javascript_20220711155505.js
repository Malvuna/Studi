

//переменная для общего контейнера
let container = document.querySelector("#container");

//переменная для всех карточек
let divAllCard = document.createElement("div");
divAllCard.className = "divAllCard";
container.append(divAllCard);

//переменная для одной карточки
let divOneCard = document.createElement("div");
divOneCard.className = "divOneCard";
divAllCard.append(divOneCard);

let foto = document.createElement("img");
divOneCard.append(foto);


let nameText = document.createElement("p");
nameText.innerHTML = "Ann";
divOneCard.append(foto);