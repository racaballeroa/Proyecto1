$(document).ready(function(){
  $('.satelite > img').click(function(elemento){
    var elementoQueLeHiceClick = elemento.currentTarget;
    $(elementoQueLeHiceClick).fadeOut(); /*fadeOut=desvanecerse*/
    $(elementoQueLeHiceClick).siblings('.informacion').fadeIn();
    // siblings=hermanos              /*fadeIn=aparecer gradualmente*/
    
  });

  $('.informacion > input ').click(function(elemento){
    var elementoQueLeHiceClick = elemento.currentTarget;
    $(elementoQueLeHiceClick).parent().fadeOut();
    if ((elementoQueLeHiceClick).parent().sibiling('img').click){
      .hidden();
    }
    $(elementoQueLeHiceClick).parent().siblings('img').fadeIn();
  })
  });
