const App = document.getElementById(`App`);
const header = document.getElementById(`header`);
const nav = document.getElementsByClassName(`nav`);

//main
const main = document.createElement(`div`);
main.id = `main`;
const list = JSON.parse(localStorage.getItem(`cardData`)) || [];
list.forEach(element => {
    main.innerHTML = main.innerHTML + `<div class = "card"><h3>${element.title}</h3><br><p>${element.content}</p><br><button onClick = "deleteFucntion(event)" id = "${element.id}" class = "deleteButton">DELETE</button></div>`;
});
header.after(main);
main.style.display = `flex`;

//About
const about = document.createElement(`div`);
about.id = `about`; 
header.after(about);
about.style.display = `none`;

//Create
const create = document.createElement(`div`);
create.id = `create`;
header.after(create);
create.style.display = `none`;

//mainButton
nav[0].addEventListener(`click`, () => {
    about.style.display = `none`;
    create.style.display = `none`;
    main.style.display = `flex`;
})

//createButton
nav[1].addEventListener(`click`, () => {
    about.style.display = `none`;
    main.style.display = `none`;
    create.style.display = `flex`;
})

//aboutButton
nav[2].addEventListener(`click`, () => {
    main.style.display = `none`;
    create.style.display = `none`;
    about.style.display = `flex`;
})

const deleteFucntion = (event) => {
    let card = JSON.parse(localStorage.getItem(`cardData`)) || [];
    let deletionIndex;
    for(let i=0; i<card.length; i++){
        if(card[i].id === event.target.id){
            deletionIndex = i;
        }
    }
    card.splice(deletionIndex, 1);
    localStorage.setItem(`cardData`, `${JSON.stringify(card)}`);
    setTimeout(() => {location.reload()}, 500);
}