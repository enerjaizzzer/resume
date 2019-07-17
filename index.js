const height = 100; // высота шапки

$(function () {

  const elem = $('.header');
  const about = $('.header__about');
  const logo = $('.header__logo');
  const nav = $('.header__nav');
  const home = $('.container__home');
  const skills = $('.container__skills');
  let heightSkills = 100;

  let top = $(this).scrollTop();

  $(window).scroll(function () {

    top = $(this).scrollTop();

    if (top > height) {
      elem.css('height', '60px');
      elem.css('width', '100%');
      elem.css('opacity', '0.9');
      elem.css('background', 'rgb(41, 41, 41)');
      elem.css('position', 'fixed');
      about.css('display', 'none');
      home.css('margin-top', '300px');
      skills.css('height', '700px');
      skills.css('height', 'auto');

      if ($(window).width() >= 768) {
        logo.css('width', '40%');
        nav.css('width', '60%');
      } else {
        logo.css('display', 'none');
        nav.css('width', '100%');
      }
    }

    if (top === 0) {
      elem.removeAttr('style');
      about.removeAttr('style');
      logo.removeAttr('style');
      nav.removeAttr('style');
      home.removeAttr('style');
      skills.removeAttr('style');
    }
  });
});
