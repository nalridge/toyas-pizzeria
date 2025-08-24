// Menu filter buttons
const buttons = document.querySelectorAll('.filters button');
const items = document.querySelectorAll('.menu-list li');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    items.forEach(item => {
      if (!filter || item.classList.contains(filter)) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
