
;(() => {
  'use strict'

  document
    .querySelector('#navbarSideCollapse')
    .addEventListener('click', () => {
      document.querySelector('.offcanvas-collapse').classList.toggle('open')
    })
})()

// window.onscroll = function () {
//   scrollFunction()
// }

// function scrollFunction() {
//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     document.getElementById('navbar').style.top = '0px'
//     document.getElementById('navbar').style.backgroundColor = '#eeeeee'
//     document.getElementById('nav-logo').style.width = '100px !important'
//   } else {
//     document.getElementById('navbar').style.top = '70px'
//     document.getElementById('navbar').style.backgroundColor = 'transparent'
//     document.getElementById('nav-logo').style.width = '50px !important'
//   }
// }
