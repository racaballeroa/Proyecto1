$(document).ready(function(){
  $('.satelite > img').click(function(elemento){
    var elementoQueLeHiceClick = elemento.currentTarget;
    $(elementoQueLeHiceClick).fadeOut();
    $(elementoQueLeHiceClick).siblings('.informacion').fadeIn();
  });

  $('.informacion > input ').click(function(elemento){
    var elementoQueLeHiceClick = elemento.currentTarget;
    $(elementoQueLeHiceClick).parent().fadeOut();
    $(elementoQueLeHiceClick).parent().siblings('img').fadeIn();
  })
});
