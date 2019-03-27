$(document).ready(function () {
  $('form').submit(function(event) {
    var nameInput = $('input#name').val();
    var cityInput = $('input:radio[name=city]:checked').val();
    console.log(nameInput, cityInput);
    $('.recipient').append(nameInput);

    $('input:radio[name=city][value=tokyo]:checked').click(function () {
      $('#front').addClass('.tokyo');
    })

    $('.postcard').show();

    event.preventDefault();
  })
});
