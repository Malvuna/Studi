//Общий контейнер
let container = document.querySelector("#container");

//див с карточками
let divAllCard = document.querySelector("#divAllCard");

//див одной карточки
let divOneCard = document.createElement("div");
divAllCard.append(divOneCard);



//карточка левый блок
let cardLeft = document.createElement("div");
divOneCard.append(cardLeft);

let cardImg = document.createElement("img");
cardImg.src = "/img/Photo.jpg"
cardLeft.append(cardImg);

let textName = document.createElement("p");
textName.innerHTML = "Any";
cardLeft.append(textName);

let textAge = document.createElement("p");
textAge.innerHTML = "21";
cardLeft.append(textAge);

//карточка парвый блок
let cardRight = document.createElement("div");
divOneCard.append(cardRight);

let textAge = document.createElement("p");
textAge.innerHTML = "21";