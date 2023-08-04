
const pickButtons = document.querySelectorAll('[data-selection]');
const SELECTIONS = [
    {
        name: 'rock',
        emoji: '✊🏽',
        beats: 'scissors'
    },
    {
        name: 'paper',
        emoji: '✋🏽',
        beats: 'rock'
    },
    {
        name: 'scissors',
        emoji: '✌🏽',
        beats: 'paper'
    }
];


pickButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection;
        const selection = SELECTIONS.find(selection => selection.name === selectionName);
        makePick(selection);
    });
});

function makePick(selection) {
    const computerSelection = randomPick();
    console.log(selection);
}


// random computer pick function
function randomPick() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
    return SELECTIONS[randomIndex];
}
