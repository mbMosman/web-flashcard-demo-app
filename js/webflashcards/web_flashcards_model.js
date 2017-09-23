export default class FlashcardsModel {

  constructor(targetId) {
    this.sessionDeck = [];
    this.progressDecks = [[], [], [], [], [], [], [], [], [], []];
    this.retired = [];
    this.sessionCount = -1;
    this.currentCard = null;
    this.cardsets = [];
  }

  addNewCards(key, cards, cardInfo) {
      this.cardsets.push(key);
      const index = this.sessionCount % 10;
      let card = null;
      cards.forEach( (card) => {
        card.info = cardInfo;
        card.successDeck = this.progressDecks[index];
        this.sessionDeck.push(card);
      });
  }
  
  getSaveData() {
    return ({ sessionCount, sessionDeck, progressDecks, retired } = this);
  }
  
  loadData(object) {
    if (object != null) {
      this.sessionCount = object.sessionCount;
      this.sessionDeck = object.sessionDeck;
      this.progressDecks = object.progressDecks;
      this.retired = object.retired;
      this.cardsets = object.cardsets;
    }
  }

  prepareSession() {
    //this.sessionDeck = [];
    this.sessionCount += 1;
    
    const index = this.sessionCount % 10;
    let progressDeck = this.progressDecks[index];
    for (card in progressDeck) {
      card.successDeck = progressDeck;
      sessionDeck.push(card);
    }
    progressDeck = this.progressDecks[index + 1];
    for (card in progressDeck) {
      card.successDeck = retired;
      sessionDeck.push(card);
    }
    progressDeck = this.progressDecks[index + 5];
    for (card in progressDeck) {
      card.successDeck = progressDeck;
      sessionDeck.push(card);
    }
    progressDeck = this.progressDecks[index + 8];
    for (card in progressDeck) {
      card.successDeck = progressDeck;
      sessionDeck.push(card);
    }
  }

  markCorrect() {
    let card = this.currentCard;
    let target = card.successDeck;
    delete card.successDeck;
    target.push(card);
  }
  
  markIncorrect() {
    this.sessionDeck.push(this.currentCard);
  }

  next() {
    let max = this.sessionDeck.length;
    let index = Math.floor(Math.random() * (max + 1));
    this.currentCard = this.sessionDeck[index];
    this.sessionDeck.splice(index, 1);
  }


}
