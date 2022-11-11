const dropdown = document.querySelectorAll('.dropdown_');

dropdown.forEach(element => {
  element.addEventListener('mouseover', () => {
    if (element.id === element.children[1].id) {
      element.children[1].classList.add('show');
      element.children[0].children[1].classList.replace('fa-caret-down', 'fa-caret-up')
    }
  })
  element.addEventListener('mouseout', () => {
    if (element.id === element.children[1].id) {
      element.children[1].classList.remove('show');
      element.children[0].children[1].classList.replace('fa-caret-up', 'fa-caret-down')
    }
  })
})