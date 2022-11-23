const buttonEL = document.querySelector('button');
const innputEL = document.querySelector('input');
const listEL = document.querySelector('ul');


function addGoal () {
    const newValue = innputEL.value;
    const listItemEL = document.createElement('li');
    listItemEL.textContent = newValue;
    listEL.appendChild(listItemEL);
    innputEL.value = ''; 
}

buttonEL.addEventListener( 'click', addGoal ); 