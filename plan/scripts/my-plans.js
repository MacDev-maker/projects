function renderPlansArray() {
  let plans = JSON.parse(localStorage.getItem('allPlans')) || [];

  let plansHTML = '';
  plans.forEach((plan, index) => {
    let html = `
    <div class="plan-container">
      <div class="plan-name">
        ${plan.name}
      </div>

      <div>
        <button class="js-delete-plan" data-id="${plan.name}">Delete</button>
        <button class="js-show-plan" data-id="${plan.name}">Show</button>
      </div>
    </div>`;

    plan.array.forEach((value) => {
      const {data} = value;

      const planHtml = `<div class="js-plan-display" id="${plan.name}" hidden>
        <div class = "schedule row">
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
        </div> 
      </div>`;
      html += planHtml;     
    });
    plansHTML += html;
  });

  document.querySelector('.js-plans-container')
    .innerHTML = plansHTML;

  document.querySelectorAll('.js-show-plan')
    .forEach((button) => {
      button.addEventListener('click' ,() => {
        const buttonId = button.dataset.id;

        document.getElementById(`${buttonId}`)
          .toggleAttribute('hidden');
      });
    });

  document.querySelectorAll('.js-delete-plan')
    .forEach((button) => {
      button.addEventListener('click', () => {
        const buttonId = button.dataset.id;
        
        plans = plans.filter(plan => plan.name !== buttonId);
        localStorage.setItem('allPlans', JSON.stringify(plans));
        renderPlansArray();
        
      });
    });
}
renderPlansArray();