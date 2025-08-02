import { arrDay, allPlans } from "./data.js";

const schedule = JSON.parse(localStorage.getItem('schedule')) || [];

let planCounter = localStorage.getItem('planCounter') || 0;

renderPage();

function renderHeader() {
  let rowHTML = '';

  arrDay.forEach((arrDay, index) => {
    const {day} = arrDay;

    const html = `<div class = "row">${day}</div>`;
    rowHTML += html;
  });

  document.querySelector('.js-schedule-week')
    .innerHTML = rowHTML;
}

function renderSave() {
  let html = '<button class = "save">Save</button>';

  document.querySelector('.js-save')
    .innerHTML += html;
}

function renderInput() {
  document.querySelector('.js-input-row')
    .innerHTML = `<div class = "schedule row ">
    <div class = "row js-row">
      <input class = "inputText js-inputText js-exercise" type = "text" placeholder = "Exercise">
      <input class = "inputText js-inputText" type = "text" placeholder = "Sets:">
      <input class = "inputText js-inputText" type = "text" placeholder = "Reps:">
      <input class = "inputText js-inputText" type = "text" placeholder = "Rir:">
      <input class = "inputText js-inputText" type = "text" placeholder = "Weight:">
    </div>
    <div class = "row js-row">
      <input class = "inputText js-inputText js-exercise" type = "text" placeholder = "Exercise">
      <input class = "inputText js-inputText" type = "text" placeholder = "Sets:">
      <input class = "inputText js-inputText" type = "text" placeholder = "Reps:">
      <input class = "inputText js-inputText" type = "text" placeholder = "Rir:">
      <input class = "inputText js-inputText" type = "text" placeholder = "Weight:">
    </div>
    <div class = "row js-row">
      <input class = "inputText js-inputText js-exercise" type = "text" placeholder = "Exercise">
      <input class = "inputText js-inputText" type = "text" placeholder = "Sets:">
      <input class = "inputText js-inputText" type = "text" placeholder = "Reps:">
      <input class = "inputText js-inputText" type = "text" placeholder = "Rir:">
      <input class = "inputText js-inputText" type = "text" placeholder = "Weight:">
    </div>
    <div class = "row js-row">
      <input class = "inputText js-inputText js-exercise" type = "text" placeholder = "Exercise">
      <input class = "inputText js-inputText" type = "text" placeholder = "Sets:">
      <input class = "inputText js-inputText" type = "text" placeholder = "Reps:">
      <input class = "inputText js-inputText" type = "text" placeholder = "Rir:">
      <input class = "inputText js-inputText" type = "text" placeholder = "Weight:">
    </div>
    <div class = "row js-row">
      <input class = "inputText js-inputText js-exercise" type = "text" placeholder = "Exercise">
      <input class = "inputText js-inputText" type = "text" placeholder = "Sets:">
      <input class = "inputText js-inputText" type = "text" placeholder = "Reps:">
      <input class = "inputText js-inputText" type = "text" placeholder = "Rir:">
      <input class = "inputText js-inputText" type = "text" placeholder = "Weight:">
    </div>
    <div class = "row js-row">
      <input class = "inputText js-inputText js-exercise" type = "text" placeholder = "Exercise">
      <input class = "inputText js-inputText" type = "text" placeholder = "Sets:">
      <input class = "inputText js-inputText" type = "text" placeholder = "Reps:">
      <input class = "inputText js-inputText" type = "text" placeholder = "Rir:">
      <input class = "inputText js-inputText" type = "text" placeholder = "Weight:">
    </div>
    <div class = "row js-row">
      <input class = "inputText js-inputText js-exercise" type = "text" placeholder = "Exercise">
      <input class = "inputText js-inputText" type = "text" placeholder = "Sets:">
      <input class = "inputText js-inputText" type = "text" placeholder = "Reps:">
      <input class = "inputText js-inputText" type = "text" placeholder = "Rir:">
      <input class = "inputText js-inputText" type = "text" placeholder = "Weight:">
    </div>
  </div>`;
}

function renderAdd() {
  document.querySelector('.js-add-row')
    .innerHTML = `<button class="add-row">Add row</button>`;
}

function renderDelete() {
  document.querySelector('.js-delete-row')
    .innerHTML = `<button class="delete-row">Delete row</button>`;
}

function renderSchedule() {
  let scheduleHTML = '';

  schedule.forEach((row, index) => { 
    const {data} = row;

    const html = `<div class = "schedule row">
      <div class = "row js-row">
        <input class = "inputText js-outputText js-exercise" type = "text" placeholder = ${data[0]}>
        <input class = "inputText js-outputText" type = "text" placeholder = ${data[1]}>
        <input class = "inputText js-outputText" type = "text" placeholder = ${data[2]}>
        <input class = "inputText js-outputText" type = "text" placeholder = ${data[3]}>
        <input class = "inputText js-outputText" type = "text" placeholder = ${data[4]}>
      </div>
      <div class = "row js-row">
        <input class = "inputText js-outputText js-exercise" type = "text" placeholder = ${data[5]}>
        <input class = "inputText js-outputText" type = "text" placeholder = ${data[6]}>
        <input class = "inputText js-outputText" type = "text" placeholder = ${data[7]}>
        <input class = "inputText js-outputText" type = "text" placeholder = ${data[8]}>
        <input class = "inputText js-outputText" type = "text" placeholder = ${data[9]}>
      </div>
      <div class = "row js-row">
        <input class = "inputText js-outputText js-exercise" type = "text" placeholder = ${data[10]}>
        <input class = "inputText js-outputText" type = "text" placeholder = ${data[11]}>
        <input class = "inputText js-outputText" type = "text" placeholder = ${data[12]}>
        <input class = "inputText js-outputText" type = "text" placeholder = ${data[13]}>
        <input class = "inputText js-outputText" type = "text" placeholder = ${data[14]}>
      </div>
      <div class = "row js-row">
        <input class = "inputText js-outputText js-exercise" type = "text" placeholder = ${data[15]}>
        <input class = "inputText js-outputText" type = "text" placeholder = ${data[16]}>
        <input class = "inputText js-outputText" type = "text" placeholder = ${data[17]}>
        <input class = "inputText js-outputText" type = "text" placeholder = ${data[18]}>
        <input class = "inputText js-outputText" type = "text" placeholder = ${data[19]}>
      </div>
      <div class = "row js-row">
        <input class = "inputText js-outputText js-exercise" type = "text" placeholder = ${data[20]}>
        <input class = "inputText js-outputText" type = "text" placeholder = ${data[21]}>
        <input class = "inputText js-outputText" type = "text" placeholder = ${data[22]}>
        <input class = "inputText js-outputText" type = "text" placeholder = ${data[23]}>
        <input class = "inputText js-outputText" type = "text" placeholder = ${data[24]}>
      </div>
      <div class = "row js-row">
        <input class = "inputText js-outputText js-exercise" type = "text" placeholder = ${data[25]}>
        <input class = "inputText js-outputText" type = "text" placeholder = ${data[26]}>
        <input class = "inputText js-outputText" type = "text" placeholder = ${data[27]}>
        <input class = "inputText js-outputText" type = "text" placeholder = ${data[28]}>
        <input class = "inputText js-outputText" type = "text" placeholder = ${data[29]}>
      </div>
      <div class = "row js-row">
        <input class = "inputText js-outputText js-exercise" type = "text" placeholder = ${data[30]}>
        <input class = "inputText js-outputText" type = "text" placeholder = ${data[31]}>
        <input class = "inputText js-outputText" type = "text" placeholder = ${data[32]}>
        <input class = "inputText js-outputText" type = "text" placeholder = ${data[33]}>
        <input class = "inputText js-outputText" type = "text" placeholder = ${data[34]}>
      </div>
    </div>`;
    scheduleHTML += html;
  });

  document.querySelector('.js-rows')
    .innerHTML = scheduleHTML;
}

function addRow() {
  let data = [];
  document.querySelectorAll('.js-inputText').forEach((box) => {
    data.push(box.value);
  });

  schedule.push({data});
  renderSchedule();

  localStorage.setItem('schedule',JSON.stringify(schedule));

  document.querySelectorAll('.js-inputText').forEach((box) => {
    box.value = '';
  });
}

function deleteRow() {
  schedule.pop();
  renderSchedule();
}

function popUp() {
  const html = `<form type="submit" class="js-form-popup">
        <input class="js-input-plan-name" alt="Plans name" type="text" placeholder="Plan's name">
        <button class="js-confirm">Save plan</button>
        <button type="button" class="js-go-back">Back</button>
      </form>`;

  document.querySelector('.js-form-container')
    .innerHTML = html;

  document.querySelector('.js-go-back')
    .addEventListener('click', () => {
      document.querySelector('.js-form-popup')
        .toggleAttribute('hidden');
    });

  document.querySelector('.js-confirm')
    .addEventListener('click', () => {
      const planName = document.querySelector('.js-input-plan-name').value;

      if (!checkIfContains(allPlans, planName)) {
        allPlans.push({
          name : planName,
          array : JSON.parse(localStorage.getItem('schedule'))
        });
      }
      localStorage.setItem('allPlans',JSON.stringify(allPlans));
      localStorage.removeItem('schedule');
      renderSchedule();
      goBackWindow();
    });
}

function goBackWindow() {
  open("http://127.0.0.1:5500/index.html");
}

function checkIfContains(array, planName) {
  let result = false;

  array.forEach((item) => {
    if(item.name == planName)
      result = true;
  });
  return result;
}

function renderPage() {
  renderHeader();
  renderInput();
  renderAdd();
  renderDelete();
  renderSave();
  renderSchedule();
}

function checkIfContainRow() {
  let row = true;

  const jsRow = document.querySelector('.js-rows').childNodes;

  if(jsRow.length == 0) {
    row = false;
  }
  return row;
}

document.querySelectorAll(".js-button-plan")
.forEach((button) => {
  button.addEventListener('click', () => {
    let title = document.querySelector(".js-title");
    title.innerHTML= 'Creating Plan';
    check();
  });
});

document.querySelector('.js-add-row')
  .addEventListener('click', () => {
    addRow();
  });

document.querySelector('.js-delete-row')
  .addEventListener('click', () => {
    deleteRow();
  });

document.querySelector('.js-save')
  .addEventListener('click', () => {
    if (checkIfContainRow()) {
      planCounter++;
      localStorage.setItem('planCounter', planCounter);
      popUp();
    } else {
      alert('Plan must have at least 1 row.');
    }
  });