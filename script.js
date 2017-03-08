$(document).ready(function() {
  $('#hidden-text').hide();
  $('#hidden-text2').hide();
  $('#hidden-text3').hide();
  $('.first').hover(function() {
    $(this).toggleClass('active');
    $('.second').toggleClass('not-active');
    $('.third').toggleClass('not-in-use');
    $('.fourth').toggleClass('not-in-use');
    $('#hidden-text').toggle();
  });
  $('.second').hover(function() {
    $(this).toggleClass('active');
    $('.first').toggleClass('not-active');
    $('.third').toggleClass('not-in-use');
    $('.fourth').toggleClass('not-in-use');
    $('#hidden-text2').toggle();
  });
  $('.third').hover(function() {
    $(this).toggleClass('active');
    $('.fourth').toggleClass('not-active');
    $('.first').toggleClass('not-in-use');
    $('.second').toggleClass('not-in-use');
    $('#hidden-text3').toggle();
  });
  $('.fourth').hover(function() {
    $(this).toggleClass('active');
    $('.third').toggleClass('not-active');
    $('.first').toggleClass('not-in-use');
    $('.second').toggleClass('not-in-use');
  });
});
