const App = document.getElementById(`App`);
const header = document.getElementById(`header`);
const nav = document.getElementsByClassName(`nav`);

//main
const main = document.createElement(`div`);
main.id = `main`; 
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

nav[0].addEventListener(`click`, () => {
    about.style.display = `none`;
    create.style.display = `none`;
    main.style.display = `flex`;
})

nav[1].addEventListener(`click`, () => {
    about.style.display = `none`;
    main.style.display = `none`;
    create.style.display = `flex`;
})

//About
nav[2].addEventListener(`click`, () => {
    main.style.display = `none`;
    create.style.display = `none`;
    about.style.display = `flex`;
})