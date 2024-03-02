const CardInput = document.createElement(`div`);
CardInput.id = `CardInput`;
CardInput.innerHTML = `<input id = "inputHeading" type = "text" placeholder = "Heading">
<textarea id = "inputDescription" placeholder = "Description">`;

const inputButton = document.createElement(`button`);
inputButton.id = `inputButton`;
inputButton.innerText = `CREATE NEW`;

CardInput.append(inputButton);

create.prepend(CardInput);

inputButton.addEventListener(`click`, () => {
    let card = JSON.parse(localStorage.getItem(`cardData`)) || [];
    let i;
    if(card.length > 0){
        i = card[card.length - 1].id;
        ++i;
    }
    else{
        i = 0;
    }
    card.push(
        new Card(
            `${i}`,
            `${inputHeading.value}`,
            `${inputDescription.value}`
        )
    );
    localStorage.setItem(`cardData`, `${JSON.stringify(card)}`);
    setTimeout(() => {location.reload()}, 500);
})