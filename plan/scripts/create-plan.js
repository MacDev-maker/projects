let arrDay = [{
  day: 'Monday'
}, {
  day: 'Tuesday'
}, {
  day: 'Wednesday'
}, {
  day: 'Thursday'
}, {
  day: 'Friday'
},{
  day: 'Saturday'
}, {
  day: 'Sunday'
}];

let rows = [];

renderHeader();
renderSave();
renderMinusButton();
renderRows();
renderButton();

function check() {
  document.querySelectorAll(".js-button-plan")
    .forEach((button) => {
      let container = document.querySelector('.container');
      button.remove();
      container.classList.remove('stopDisplaying');
  });
}

function renderHeader() {
  let rowHTML = '';

  arrDay.forEach((arrDay, index) => {
    const {day} = arrDay;

    const html = `<div class = "row">${day}</div>`;
    rowHTML += html;
  });

  document.querySelector('.schedule-week')
    .innerHTML = rowHTML;
}

function renderButton() {
  let html = '<button class = "add">+</button>';

  document.querySelector('.plus')
    .innerHTML += html;
}

function renderSave() {
  let html = '<button class = "save">Save</button>';

  document.querySelector('.js-save')
    .innerHTML += html;
}

function renderMinusButton() {
  let html = '<button class = "remove">-</button>';

  document.querySelector('.minus')
    .innerHTML = html;
}

function renderRows() {
  let rowsHTML = '';

  rows.forEach((row, index) => {
    const html = `
    <div class = "schedule row">
      <div class = "row js-row">
        <input class = "inputText js-exercise" type = "text" placeholder = "Exercise">
        <input class = "inputText" type = "text" placeholder = "Sets:">
        <input class = "inputText" type = "text" placeholder = "Reps:">
        <input class = "inputText" type = "text" placeholder = "Rir:">
        <input class = "inputText" type = "text" placeholder = "Weight:">
      </div>
      <div class = "row js-row">
        <input class = "inputText js-exercise" type = "text" placeholder = "Exercise">
        <input class = "inputText" type = "text" placeholder = "Sets:">
        <input class = "inputText" type = "text" placeholder = "Reps:">
        <input class = "inputText" type = "text" placeholder = "Rir:">
        <input class = "inputText" type = "text" placeholder = "Weight:">
      </div>
      <div class = "row js-row">
        <input class = "inputText js-exercise" type = "text" placeholder = "Exercise">
        <input class = "inputText" type = "text" placeholder = "Sets:">
        <input class = "inputText" type = "text" placeholder = "Reps:">
        <input class = "inputText" type = "text" placeholder = "Rir:">
        <input class = "inputText" type = "text" placeholder = "Weight:">
      </div>
      <div class = "row js-row">
        <input class = "inputText js-exercise" type = "text" placeholder = "Exercise">
        <input class = "inputText" type = "text" placeholder = "Sets:">
        <input class = "inputText" type = "text" placeholder = "Reps:">
        <input class = "inputText" type = "text" placeholder = "Rir:">
        <input class = "inputText" type = "text" placeholder = "Weight:">
      </div>
      <div class = "row js-row">
        <input class = "inputText js-exercise" type = "text" placeholder = "Exercise">
        <input class = "inputText" type = "text" placeholder = "Sets:">
        <input class = "inputText" type = "text" placeholder = "Reps:">
        <input class = "inputText" type = "text" placeholder = "Rir:">
        <input class = "inputText" type = "text" placeholder = "Weight:">
      </div>
      <div class = "row js-row">
        <input class = "inputText js-exercise" type = "text" placeholder = "Exercise">
        <input class = "inputText" type = "text" placeholder = "Sets:">
        <input class = "inputText" type = "text" placeholder = "Reps:">
        <input class = "inputText" type = "text" placeholder = "Rir:">
        <input class = "inputText" type = "text" placeholder = "Weight:">
      </div>
      <div class = "row js-row">
        <input class = "inputText js-exercise" type = "text" placeholder = "Exercise">
        <input class = "inputText" type = "text" placeholder = "Sets:">
        <input class = "inputText" type = "text" placeholder = "Reps:">
        <input class = "inputText" type = "text" placeholder = "Rir:">
        <input class = "inputText" type = "text" placeholder = "Weight:">
      </div>
    </div>`;
    rowsHTML += html;
  });

  document.querySelector('.extra-row')
    .innerHTML = rowsHTML;
}

function addRow() {
  rows.push({
    row: `<div class = "schedule row ">
    <div class = "row js-row">
      <input class = "inputText js-exercise" type = "text" placeholder = "Exercise">
      <input class = "inputText" type = "text" placeholder = "Sets:">
      <input class = "inputText" type = "text" placeholder = "Reps:">
      <input class = "inputText" type = "text" placeholder = "Rir:">
      <input class = "inputText" type = "text" placeholder = "Weight:">
    </div>
    <div class = "row js-row">
      <input class = "inputText js-exercise" type = "text" placeholder = "Exercise">
      <input class = "inputText" type = "text" placeholder = "Sets:">
      <input class = "inputText" type = "text" placeholder = "Reps:">
      <input class = "inputText" type = "text" placeholder = "Rir:">
      <input class = "inputText" type = "text" placeholder = "Weight:">
    </div>
    <div class = "row js-row">
      <input class = "inputText js-exercise" type = "text" placeholder = "Exercise">
      <input class = "inputText" type = "text" placeholder = "Sets:">
      <input class = "inputText" type = "text" placeholder = "Reps:">
      <input class = "inputText" type = "text" placeholder = "Rir:">
      <input class = "inputText" type = "text" placeholder = "Weight:">
    </div>
    <div class = "row js-row">
      <input class = "inputText js-exercise" type = "text" placeholder = "Exercise">
      <input class = "inputText" type = "text" placeholder = "Sets:">
      <input class = "inputText" type = "text" placeholder = "Reps:">
      <input class = "inputText" type = "text" placeholder = "Rir:">
      <input class = "inputText" type = "text" placeholder = "Weight:">
    </div>
    <div class = "row js-row">
      <input class = "inputText js-exercise" type = "text" placeholder = "Exercise">
      <input class = "inputText" type = "text" placeholder = "Sets:">
      <input class = "inputText" type = "text" placeholder = "Reps:">
      <input class = "inputText" type = "text" placeholder = "Rir:">
      <input class = "inputText" type = "text" placeholder = "Weight:">
    </div>
    <div class = "row js-row">
      <input class = "inputText js-exercise" type = "text" placeholder = "Exercise">
      <input class = "inputText" type = "text" placeholder = "Sets:">
      <input class = "inputText" type = "text" placeholder = "Reps:">
      <input class = "inputText" type = "text" placeholder = "Rir:">
      <input class = "inputText" type = "text" placeholder = "Weight:">
    </div>
    <div class = "row js-row">
      <input class = "inputText js-exercise" type = "text" placeholder = "Exercise">
      <input class = "inputText" type = "text" placeholder = "Sets:">
      <input class = "inputText" type = "text" placeholder = "Reps:">
      <input class = "inputText" type = "text" placeholder = "Rir:">
      <input class = "inputText" type = "text" placeholder = "Weight:">
    </div>
  </div>`
  });
  renderRows();
}

function removeRow() {
  rows.splice(-1);
  renderRows();
}

document.querySelector('.plus')
  .addEventListener('click', () => {
    addRow();
  });

document.querySelector('.minus')
  .addEventListener('click', () => {
    removeRow();
  });

document.querySelectorAll(".js-button-plan")
  .forEach((button) => {
    button.addEventListener('click', () => {
      let title = document.querySelector(".js-title");
      title.innerHTML= 'Creating Plan';
      check();
    });
  });