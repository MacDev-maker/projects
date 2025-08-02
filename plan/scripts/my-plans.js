function renderPlansArray() {
  let plans = JSON.parse(localStorage.getItem('allPlans')) || [];

  let plansHTML = '';
  plans.forEach((plan, index) => {
    let html = `<div class="plan-container">
      <div class="plan-name">
        ${plan.name}
      </div>

      <div>
        <button class="js-delete-plan" data-id="${plan.name}">Delete</button>
        <button class="js-show-plan" data-id="${plan.name}">Show</button>
      </div>`;

    let planHtml = `<div class="js-plan-display" id="${plan.name}" hidden>
      <div class = "schedule row">
      <div class="plan-features">
        <div class="exercise">Exercise</div>
        <div class="sets">Sets</div>
        <div class="reps">Reps</div>
        <div class="rir">Rir</div>
        <div class="weight">Weight</div>      
      </div>`;

    plan.array.forEach((value, index) => {
      const {data} = value;

      for(let i = 0; i < data.length; i += 5) {
        planHtml += `<div class = "row js-row">
          <input class = "inputText js-outputText js-exercise" type = "text" placeholder = ${data[i]}>
          <input class = "inputText js-outputText" type = "text" placeholder = ${data[i + 1]}>
          <input class = "inputText js-outputText" type = "text" placeholder = ${data[i + 2]}>
          <input class = "inputText js-outputText" type = "text" placeholder = ${data[i + 3]}>
          <input class = "inputText js-outputText" type = "text" placeholder = ${data[i + 4]}>
        </div>`;
      }
    });
    planHtml += `</div></div>`;

    html += planHtml;

    html += `</div>`;

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