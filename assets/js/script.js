
const draftButtons = document.querySelectorAll('[data-selection]');



draftButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection;
        makeSelection(selectionName);
    });
});

function makeSelection(selection) {
    console.log(selection);
}