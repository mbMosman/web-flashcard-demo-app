import WebFlashcardApp from "js/webflashcards/web_flashcards_app";
$(function () {
  
  const wfApp = new WebFlashcardApp("cardapp");
  let appStarted = false;
  wfApp.init();
  if (wfApp.getSessionCardCount() < 1){
    $("#welcome").show();
  }
  
  $("#app-start").on("click", function() {
    if (wfApp.getSessionCardCount() > 0){
      $("#app-start").hide();
      $("#welcome").hide();
      wfApp.startSession();
    }
  });
  
  $("#joyful-jp-l1").on("click", function() {
    $.getJSON("data/joyful-jp-l1.json", function(data) {
      wfApp.addNewCards(data); 
      if (!appStarted) {
        $("#app-start").show();
      }
    });
  });
  
  $("#joyful-jp-l2").on("click", function() {
    $.getJSON("data/joyful-jp-l2.json", function(data) {
      wfApp.addNewCards(data); 
      if (!appStarted) {
        $("#app-start").show();
      }
    });
  });

  $("#joyful-jp-l3").on("click", function() {
    $.getJSON("data/joyful-jp-l3.json", function(data) {
      wfApp.addNewCards(data);  
      if (!appStarted) {
        $("#app-start").show();
      }
    });
  });  
  
  $("#joyful-jp-travel-l1").on("click", function() {
    $.getJSON("data/joyful-jp-travel-l1.json", function(data) {
      wfApp.addNewCards(data); 
      if (!appStarted) {
        $("#app-start").show();
      }
    });
  });

  $("#joyful-jp-travel-l3").on("click", function() {
    $.getJSON("data/joyful-jp-travel-l3.json", function(data) {
      wfApp.addNewCards(data); 
      if (!appStarted) {
        $("#app-start").show();
      } 
    });
  });
});
