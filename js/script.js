$('.expand-button').on('click', function(){
  $('.post-article').toggleClass('-expanded');
  
  if ($('.post-article').hasClass('-expanded')) {
    $('.expand-button').html('READ LESS');
  } else {
    $('.expand-button').html('READ MORE');
  }
});