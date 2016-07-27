$(document).ready(function () {

  $('.diag div').css('left', 'calc(50% - ' + ($('.diag div').innerWidth() /2 - 236) + 'px)')
  $('.diag').css('left', '-236px');

  $('button#two').mouseenter(function() {
    $(this).children('.diag').animate({'left':'0'},300);
    $(this).children('.diag').children('div').animate({'left':'-=236px'},300);
  }).mouseleave(function() {
    $(this).children('.diag').animate({'left':'-236px'},300);
    $(this).children('.diag').children('div').animate({'left':'+=236px'},300);
  })

  $('button#three').mouseenter(function() {
    $(this).children('.circ').animate({
      height: ($('button#three').innerWidth() * 2) + 'px',
      width: ($('button#three').innerWidth() * 2) + 'px',
      left: '-50%',
      top: '-50%',
      paddingTop: '23px'
    },150)
  }).mouseleave(function() {
    $(this).children('.circ').animate({
      height: '0px',
      width: '0px',
      left: '50%',
      top: '50%',
      paddingTop: '0px'
    },150)
  })

  $('button#four').mouseenter(function() {
    $(this).children('#r1').animate({width:'100%'},300);
    $(this).children('#r2').delay(75).animate({width:'100%'},300);
    $(this).children('#r3').delay(150).animate({width:'100%'},300);
    $(this).children('#r4').delay(225).animate({width:'100%'},300);
  }).mouseleave(function() {
    $(this).children('#r4').animate({width:'0',left:'100%'},300);
    $(this).children('#r3').delay(75).animate({width:'0',left:'100%'},300);
    $(this).children('#r2').delay(150).animate({width:'0',left:'100%'},300);
    $(this).children('#r1').delay(225).animate({width:'0',left:'100%'},300);
    $(this).children('.rect').delay(226).animate({left:'0'},0);
  })
})
