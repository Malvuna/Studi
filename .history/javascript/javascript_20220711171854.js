//Общий контейнер
let container = document.querySelector("#container");

//див с карточками
let divAllCard = document.querySelector("#divAllCard");

//див одной карточки
let divOneCard = document.createElement("div");
divOneCard.className = "divOneCard";
divAllCard.append(divOneCard);



//карточка левый блок
let cardLeft = document.createElement("div");
divOneCard.append(cardLeft);

let cardImg = document.createElement("img");
cardImg.src = "/img/Photo.jpg"
cardLeft.append(cardImg);

let textName = document.createElement("p");
textName.innerHTML = "Any";
textName.className = "textName";
cardLeft.append(textName);

let textAge = document.createElement("p");
textAge.innerHTML = "21";
textAge.className = "textAge";
cardLeft.append(textAge);

//карточка парвый блок
let cardRight = document.createElement("div");
textName.className = "textName";
divOneCard.append(cardRight);

let textHead = document.createElement("p");
textHead.innerHTML = "Чудесные преподаватели!";
cardRight.append(textHead);

let textStar = document.createElement("p");
textStar.innerHTML = "★★★★★";
cardRight.append(textStar);

let textText = document.createElement("p");
textText.innerHTML = "Мне очень понравилось  обучение здесь! Самые лучшие преподаватели! Всегда помогут, подскажут, дадут обратную связь. Училась и в других школах, но могу с уверенностью сказать, что...";
cardRight.append(textText);

let textAll = document.createElement("p");
textAll.innerHTML = "Смотреть полностью";
cardRight.append(textAll);



