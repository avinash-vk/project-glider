$(function(){

$( "#textform" ).submit(function( event ) {
  event.preventDefault();
  var $rawtext = $("#textbody").val();
  var $newtext = "";

  $("#mdbody").html("");
  var boldstate = false;

  for (let i = 0; i < $rawtext.length; i++) {

    if($rawtext[i] == '*' && i!=0 && $rawtext[i-1]=='*' && boldstate == false){
      $newtext+="<b>";
      boldstate = true;
      continue;
    }
    else if($rawtext[i] == '*' && i!=0 && $rawtext[i-1]=='*' && boldstate == true){
      $newtext+="</b>";
      boldstate = false;
      continue;
    }
    else{
      $newtext+=$rawtext[i];
    }
  }

  $('#mdbody').html($newtext);





});

});
