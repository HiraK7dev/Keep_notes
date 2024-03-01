class Card{
    constructor(title, content){
        const card = document.createElement(`div`);
        card.className = `card`;
        card.innerHTML = `<h3>${title}</h3><br><p>${content}</p>`;
        main.append(card);
    }
}

const newCard = new Card(`Hello`, `Welcone to Keep Note`);
// localStorage.setItem(1, main.innerHTML);
// const hello = localStorage.getItem(1);
// console.log(hello);