function renderPlansArray() {
  let plans = JSON.parse(localStorage.getItem('allPlans')) || [];

  let plansHTML = '';
  plans.forEach((plan) => {
    const html = `
    <div class="plan-container">
      <div class="plan-name">
        ${plan.name}
      </div>
      
      <button class="show-plan" data-id="${plan.name}">Show</button>
    </div>
    <div class="js-plan-display" id=${plan.name} hidden>tak</div>`;
    plansHTML += html;
  });
  document.querySelector('.js-plans-container')
    .innerHTML = plansHTML;

  document.querySelectorAll('.show-plan')
    .forEach((button) => {
      button.addEventListener('click' ,() => {
        const buttonId = button.dataset.id;
        
        document.getElementById(`${buttonId}`)
          .toggleAttribute('hidden');
      });
    });
}
renderPlansArray();