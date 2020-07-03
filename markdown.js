$(function(){

$( "#textform" ).submit(function( event ) {
  event.preventDefault();
  var $rawtext = $("#textbody").val();
  $("#mdbody").val($rawtext);
});

});
