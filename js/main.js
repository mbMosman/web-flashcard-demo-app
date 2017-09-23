import WebFlashcardApp from "js/webflashcards/web_flashcards_app";
$(function () {
    
  const wfApp = new WebFlashcardApp("cardapp");
  
  $.getJSON("data/joyful-jp-l1.json", function(data) {
    wfApp.init();
    wfApp.addNewCards(data); 
    wfApp.startSession();
  });

});
