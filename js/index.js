const listItems = document.querySelector('.header__nav-list')

// Convertir HTMLCollection a Array para poder usar forEach
Array.from(listItems.children).forEach(item => {
  item.addEventListener('click', function (e) {
    // Primero remover 'active' de todos los items
    Array.from(listItems.children).forEach(child => {
      child.classList.remove('active');
    });

    // Luego agregar 'active' al item clickeado
    this.classList.add('active');
  });
});

const redirect_news = document.querySelectorAll('.redirect_news')
console.log(redirect_news);

redirect_news.forEach(item => {
  item.addEventListener('click', e => {
    window.location = 'https://www.pwc.com/co/es/publicaciones/ceo-survey-colombia.html'
  })
})

// document.querySelector('.header__nav-list').addEventListener('click', function (item) {
//   console.log(item.target);
//   item.target.addEventListener('click', e => {
//     e.target.classList.add('active');
//   })
// })