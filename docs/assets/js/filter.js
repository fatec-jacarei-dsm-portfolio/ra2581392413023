document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const cardLinks = document.querySelectorAll('.portfolio-card-link');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
 
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = (btn.dataset.filter || btn.getAttribute('data-filter') || '').toLowerCase().trim();

      cardLinks.forEach(link => {

        const linkCategoryRaw = (link.dataset.category || link.getAttribute('data-category') || '');
  
        const innerCard = link.querySelector('.portfolio-card');
        const innerCategoryRaw = (innerCard?.dataset?.category || innerCard?.getAttribute('data-category') || '');

        const category = (linkCategoryRaw || innerCategoryRaw).toLowerCase().trim();

        if (filter === 'all' || category === filter) {
          link.classList.remove('hidden');
        } else {
          link.classList.add('hidden');
        }
      });
    });
  });
});
