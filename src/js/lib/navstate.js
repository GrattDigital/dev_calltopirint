/*eslint-env jquery*/

function navstate() {
  $(function() {
    $('.menu__icon').on('click', function() {
      $(this).closest('.navbar')
        .toggleClass('menu_state_open');
    });
    
    $('.navbar__link').on('click', function() {
      // do something

      $(this).closest('.navbar')
        .removeClass('menu_state_open');
    });
  });
  let heroSection = document.getElementById('hero');
  let heroSectionHeight = heroSection.offsetHeight;
  // let scrollHeght = document.getElementsByTagName('html')[0].scrollTop;
  let header = document.getElementById('header');

  window.onscroll = function() {
    if (window.pageYOffset < heroSectionHeight) {
      header.classList.remove('fixed_header');
    } else if (window.pageYOffset > heroSectionHeight) {
      header.classList.add('fixed_header');
    };
    console.log(window.pageYOffset);
  };

  // var heroSectionBottom = heroSection.getBoundingClientRect().bottom + window.pageYOffset;

  // window.onscroll = function() {
  //   if (heroSection.classList.contains('fixed') && window.pageYOffset < heroSection.) {
  //     heroSection.classList.remove('fixed');
  //   } else if (window.pageYOffset > heroSectionBottom) {
  //     heroSection.classList.add('fixed');
  //   }
  // };


  console.log(heroSection);
  console.log(heroSectionHeight);



}

module.exports = navstate;
