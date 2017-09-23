import FlashcardsUI from "./web_flashcards_ui";
import WebFlashcards from "./web_flashcards_model";

export default class WebFlashcardApp {

  constructor(targetId, debug) {
    this.model = new WebFlashcards();
    this.appUi = new FlashcardsUI(this, this.model, targetId);
  }

  init() {
    let saveData = this.loadFromBrowser();
    this.model.prepareSession();
    this.appUi.initialize();
  }

  addNewCards(cardset) {
    let key = cardset.about.id;
    if (this.model.cardsets.filter((item) => item = key).length > 0) {
      this.appUi.showWarningMessage("Sorry, that cardset has already been loaded.");
    } else {
      this.model.addNewCards(key, cardset.cards, cardset.about);
      this.appUi.updateSessionStats(this.model);
    }
  }
  
  cardCorrect() {
    this.appUi.clearSecondaryMessages();
    this.model.markCorrect();
    this.nextCard();
  }
  
  cardIncorrect() {
    this.appUi.clearSecondaryMessages();
    this.model.markIncorrect();
    this.nextCard();
  }
  
  loadFromBrowser() {
    const saveData = localStorage.getItem("webFlashcardData");
    if (saveData != null) {
      const object = JSON.parse(saveData);
      this.model.loadData(object);
    } 
  }
  
  nextCard() {
    this.saveToBrowser();
    this.model.next();
    this.appUi.showCard(this.model.currentCard);
    this.appUi.updateSessionStats(this.model);
  }
  
  startSession() {
    this.appUi.updateSessionStats(this.model);
    this.appUi.updateHistoricalStats(this.model);
    this.nextCard();
  }

  saveToBrowser() {
    const object = { 
      sessionCount: this.model.sessionCount,
      sessionDeck: this.model.sessionDeck,
      progressDecks: this.model.progressDecks,
      retired: this.model.retired,
      cardsets: this.model.cardsets
    };
    localStorage.setItem("webFlashcardData", JSON.stringify(object));
  }
}

