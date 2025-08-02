const boxes = document.querySelectorAll('.box');
const captions = document.querySelectorAll('.barbell-caption');
const headerBenefits = document.querySelector('.header-benefits');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const caption = entry.target;
      const box = caption.previousElementSibling;

      box.classList.add('show');

      setTimeout(() => {
        caption.classList.add('color-change');
      }, 1900);

      observer.unobserve(caption);
    }
  });
}, {
  threshold: 0.7 
});

captions.forEach(caption => observer.observe(caption));