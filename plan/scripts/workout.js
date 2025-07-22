const box = document.querySelector('.box');
const caption = document.querySelector('.barbell-caption');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      box.classList.add('show');
      setTimeout(() => {
        caption.classList.add('color-change')
      },2100);
    }
  });
}, {
  threshold: 0.7 
});


observer.observe(caption);