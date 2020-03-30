$(document).ready(function() {
  $("#formOne").submit(function(){
    event.preventDefault();
    var grocList =[$("input#groc1").val(), $("input#groc2").val(), $("input#groc3").val(), $("input#groc4").val()];   
    $("#formOne").hide();
    grocList = grocList.sort();
    grocList.forEach(function(newList){
      newList = newList.toUpperCase();
      
      $(".newList").append(newList + "<br>");
    });
    // grocList.forEach(function()) {
      
    });
  });
