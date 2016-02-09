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

$(function() {
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("g-bg-color");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("y-bg-color");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("r-bg-color");
  });
});

$(function() {
    $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("text-black");
    $("body").addClass("bg-white");
  });
    $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("text-white");
    $("body").addClass("bg-black");
  });
});
