const CardInput = document.createElement(`div`);
CardInput.id = `CardInput`;
CardInput.innerHTML = `<input id = "inputHeading" type = "text" placeholder = "Heading">
<textarea id = "inputDescription" placeholder = "Description">`;

const inputButton = document.createElement(`button`);
inputButton.id = `inputButton`;
inputButton.innerText = `CREATE NEW`;

CardInput.append(inputButton);

create.prepend(CardInput);