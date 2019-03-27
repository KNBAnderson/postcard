$(document).ready(function () {
  $('form').submit(function(event) {
    var nameInput = $('input#name').val();
    var cityInput = $('input:radio[name=city]:checked').val();
    console.log(nameInput, cityInput);
    $('.recipient').text(nameInput);
    $('#front').addClass(cityInput);

    $('.postcard').show();
    event.preventDefault();

  })
});
