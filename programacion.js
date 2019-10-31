$(document).ready(function(){
  var tiempoTransicion = 400;
  
  function mostrarInformacion(elemento) {
    var elementoQueLeHiceClick = elemento.currentTarget;
    
    $('.perfil-envoltura')
      .children('.Personal')
      .fadeOut(tiempoTransicion);
      
    var informacionADesplegar = $(elementoQueLeHiceClick).data('clicked');
    
    $('#' + informacionADesplegar).fadeIn();
  };
  
  $('.satelite > img').click(mostrarInformacion);

  $('.img').css('background-color', 'naranja')
  
  function cerrarInformacion(elemento) {
    var elementoQueLeHiceClick = elemento.currentTarget;
    $(elementoQueLeHiceClick)
      .parent()
      .fadeOut(tiempoTransicion)
      .parent()
      .siblings('img')
      .fadeIn(tiempoTransicion);
      
    $('.personal').fadeIn(tiempoTransicion)
  };
  
  $('.informacion > input ').click(cerrarInformacion);
});
