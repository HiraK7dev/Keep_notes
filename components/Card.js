class Card{
    constructor(id, title, content){
        this.id = id;
        this.title = title;
        this.content = content;
    }
}

let CardData = JSON.parse(localStorage.getItem(`cardData`)) || [
    new Card(
        0,
        `Welcome to Keep Notes!`,
        `We're thrilled to have you join our community of note-takers, organizers, and idea creators. With Keep Notes, you've got the perfect tool to capture your thoughts, make lists, and keep your life organized—all in one place.`
    )
];
localStorage.setItem(`cardData`, `${JSON.stringify(CardData)}`);