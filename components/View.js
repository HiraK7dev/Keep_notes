const View = document.createElement(`div`);
View.id = `View`;
View.style.display = `none`;
App.before(View);

const enlargedCard = document.createElement(`div`);
enlargedCard.id = `enlargedCard`;
View.prepend(enlargedCard);