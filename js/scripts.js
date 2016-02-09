$(document).ready(function() {
  $('#blanks form').submit(function(event) {
    var per1Input = $("input#per1").val();
    var adjectiveInput = $("input#adjective").val();
    var per2Input = $("input#per2").val();
    var placeInput = $("input#place").val();
    var thingInput = $("input#thing").val();
    var verbInput = $("input#verb").val().toUpperCase();

    $('.per1').text(per1Input);
    $('.adjective').text(adjectiveInput);
    $('.per2').text(per2Input);
    $('.place').text(placeInput);
    $('.thing').text(thingInput);
    $('.verb').text(verbInput);

    $('#story').show();

    event.preventDefault();
  });
});
