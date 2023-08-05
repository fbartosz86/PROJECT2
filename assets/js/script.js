
const pickButtons = document.querySelectorAll('[data-selection]');
const column = document.querySelector('[data-final-column]');
const computerScore = document.querySelector('[data-computer-score]');
const yourScore = document.querySelector('[data-your-score]');
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
    const yourWinner = winnerIs(selection, computerSelection);
    const computerWinner = winnerIs(computerSelection, selection);

    addPickResult(computerSelection, computerWinner);
    addPickResult(selection, yourWinner);

    if (yourWinner) addUpScore(yourScore);
    if (computerWinner) addUpScore(computerScore);
}


// incrise by 1 score of the winer
function addUpScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
    checkWinner();
}

// history resoults 
function addPickResult(selection, winner) {
    const div = document.createElement('div');
    div.innerText = selection.emoji;
    div.classList.add('result-pick');
    if (winner) div.classList.add('winner');
    column.after(div);

}


// winnerIs helps to chose who winner is
function winnerIs(selection, opponentSelection) {
    return selection.beats === opponentSelection.name;
}


// random computer pick function
function randomPick() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
    return SELECTIONS[randomIndex];
}
