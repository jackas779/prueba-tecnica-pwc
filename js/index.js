const listItems = document.querySelector('.header__nav-list')

// Convertir HTMLCollection a Array para poder usar forEach
Array.from(listItems.children).forEach(item => {
  console.log(item);
  item.addEventListener('click', function (e) {
    // Primero remover 'active' de todos los items
    Array.from(listItems.children).forEach(child => {
      child.classList.remove('active');
    });

    // Luego agregar 'active' al item clickeado
    this.classList.add('active');
  });
});


// document.querySelector('.header__nav-list').addEventListener('click', function (item) {
//   console.log(item.target);
//   item.target.addEventListener('click', e => {
//     e.target.classList.add('active');
//   })
// })