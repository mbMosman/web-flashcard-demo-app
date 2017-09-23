import WebFlashcards from "./web_flashcards_model";

export default class FlashcardsUI {

  constructor(app, model, targetId) {
    this.app = app;
    this.model = model;
    this.targetId = targetId;
    this.cardArea = null;
    this.currentCard = null;
    this.correctCardCount = 0;
    this.mainInfoPanel = null;
    this.secondaryInfoPanel = null;
    this.currentStatsList = null;
    this.historicalStatsList = null;
    
    this.defaultAppStyles = {
      appAreaStyles: "alert alert-secondary",
      buttonStyles: "btn btn-lg mr-1",
      buttonPrimaryStyles: "btn-primary",
      buttonCorrectStyles: "btn-success",
      buttonIncorrectStyles: "btn-danger",
      cardStyles: "col-12 webflash-card",
      cardSide1Styles: "jp",
      cardSide2Styles: "text-muted",
      cardDivStyles: "row webflash-card-area text-center",
      cardButtonAreaStyles: "col-12",
      cardButtonDivStyles: "",
      infoAreaStyles: "row webflash-info-area",
      infoDivStyles: "col",
      statsDivStyles: "row",
      statsHeadingStyles: "alert-heading",
      statsGroupStyles: "col",
      infoPrimaryStyles: "alert alert-primary container",
      infoSuccessStyles: "alert alert-success col",
      infoErrorStyles: "alert alert-danger col",
      infoWarningStyles: "alert alert-warning col"
    }
    this.appStyles = this.defaultAppStyles;
  }

  initialize() {
    const targetElement = document.getElementById(this.targetId);
    targetElement.setAttribute("class", this.appStyles.appAreaStyles);
    
    const infoArea = this.createInfoArea();
    targetElement.appendChild(infoArea);
    
    this.cardArea = this.createCardArea();
    this.cardArea.setAttribute("hidden", "");
    targetElement.appendChild(this.cardArea);
  }
  
  showCard(card){
    const side1 = this.currentCard.firstElementChild;
    const side2 = this.currentCard.lastElementChild
    
    side1.innerHTML = "";
    side1.appendChild(this.createElementWithText("p", card.side1, ""));
    side1.removeAttribute("hidden", "");
    
    side2.innerHTML = "";
    side2.appendChild(this.createElementWithText("p", card.side2, ""));
    side2.setAttribute("hidden", "");
    this.cardArea.removeAttribute("hidden");
  }
  
  flipCurrentCard(){
    let currentCard = this.currentCard;
    if (currentCard != null) {
      for (let i=0; i < currentCard.children.length; i++) { 
        let sideOfCard = currentCard.children[i];
        if (sideOfCard.hasAttribute("hidden")) {
          sideOfCard.removeAttribute("hidden");
        } 
      }
    } 
  }
  
  createElement(type, styles) {
    const element = document.createElement(type);
    if (styles != null && styles.trim().length > 0) {
      element.setAttribute("class", styles);
    }
    return element;
  }
  
  createElementWithText(type, text, styles) {
    const element = document.createElement(type);   
    if (styles != null && styles.trim().length > 0) {
      element.setAttribute("class", styles);
    }
    if (text != null && text.trim().length > 0) {
      element.appendChild(document.createTextNode(text));
    }
    return element;
  }
  
  createCardArea() {
    let div = this.createElement("div", this.appStyles.cardDivStyles);
    
    this.currentCard = this.createElement("div", this.appStyles.cardStyles);
    div.appendChild(this.currentCard);
    this.currentCard.appendChild(this.createElement("div", this.appStyles.cardSide1Styles));
    this.currentCard.appendChild(this.createElement("div", this.appStyles.cardSide2Styles));
    
    const cardButtons = this.createCardButtons();
    div.appendChild(cardButtons);
    
    return div;
  }

  createCardButtons() {
    
    let buttonArea = this.createElement("div", this.appStyles.cardButtonAreaStyles);
    let div = this.createElement("div", this.appStyles.cardButtonDivStyles);
    buttonArea.appendChild(div);
    
    let styles = `${this.appStyles.buttonStyles} ${this.appStyles.buttonPrimaryStyles}`;
    let btnFlip = this.createElementWithText("button", "Flip", styles);
    div.appendChild(btnFlip);
    
    styles = `${this.appStyles.buttonStyles} ${this.appStyles.buttonCorrectStyles}`;
    let btnCorrect = this.createElementWithText("button", "Correct!", styles);
    btnCorrect.setAttribute("hidden", "");
    div.appendChild(btnCorrect);
    
    styles = `${this.appStyles.buttonStyles} ${this.appStyles.buttonIncorrectStyles}`;
    let btnIncorrect = this.createElementWithText("button", "Incorrect", styles);
    btnIncorrect.setAttribute("hidden", "");
    div.appendChild(btnIncorrect);
    
    btnFlip.addEventListener("click", () => {
      btnFlip.setAttribute("hidden", "");
      btnCorrect.removeAttribute("hidden");
      btnIncorrect.removeAttribute("hidden");
      this.flipCurrentCard();
    });

    btnCorrect.addEventListener("click", () => {
      btnCorrect.setAttribute("hidden", "");
      btnIncorrect.setAttribute("hidden", "");
      btnFlip.removeAttribute("hidden");
      this.cardArea.setAttribute("hidden", "");
      this.correctCardCount += 1;
      this.app.cardCorrect();
    });
    
    btnIncorrect.addEventListener("click", () => {
      btnIncorrect.setAttribute("hidden", "");
      btnCorrect.setAttribute("hidden", "");
      btnFlip.removeAttribute("hidden");
      this.cardArea.setAttribute("hidden", "");
      this.app.cardIncorrect();
    });
    
    return buttonArea;
  }
  
  clearSecondaryMessages(){
    const infoPanel = this.secondaryInfoPanel;
    infoPanel.innerHTML = "";
    infoPanel.setAttribute("hidden", "");
  }

  createInfoArea(){
    let infoArea = this.createElement("div", this.appStyles.infoAreaStyles);
    this.mainInfoPanel = this.createMainInfoPanel();
    infoArea.appendChild(this.mainInfoPanel);
    
    this.secondaryInfoPanel = document.createElement("div");
    this.secondaryInfoPanel.setAttribute("hidden", "");
    infoArea.appendChild(this.secondaryInfoPanel);
    
    return infoArea;
  }
  
  createMainInfoPanel() {
    const infoPanel = this.createElement("div", this.appStyles.infoPrimaryStyles);
    
    const statsDiv = this.createElement("div", this.appStyles.statsDivStyles);
    infoPanel.appendChild(statsDiv);
    
    const currentStats = this.createSessionStatsDiv();
    statsDiv.appendChild(currentStats);
    
    const historicalStats = this.createHistoricalStatsDiv();
    statsDiv.appendChild(historicalStats);
  
    return infoPanel;
  }
  
  createSessionStatsDiv(){
    this.currentStatsList = (this.createElement("ul", this.appStyles.statsListStyles));
    
    const currentStats = this.createElement("div", this.appStyles.statsGroupStyles);
    currentStats.appendChild(this.createElementWithText("h3", "Session Info",
            this.appStyles.statsHeadingStyles));
    currentStats.appendChild(this.currentStatsList);
    return currentStats;
  }
  
  createHistoricalStatsDiv() {
    this.historicalStatsList = (this.createElement("ul", this.appStyles.statsListStyles));
    
    const historicalStats = this.createElement("div", this.appStyles.statsGroupStyles);
    historicalStats.appendChild(this.createElementWithText("h3", "Historical Info",
            this.appStyles.statsHeadingStyles));
    historicalStats.appendChild(this.historicalStatsList);
    return historicalStats;
  }
  
  showErrorMessage(text) {
    const infoPanel = this.secondaryInfoPanel;
    
    infoPanel.innerHTML = "";
    infoPanel.appendChild(this.createElementWithText("p", text, ""));
    infoPanel.setAttribute("class", this.appStyles.infoErrorStyles);
    infoPanel.removeAttribute("hidden");                         
  }
  
  showWarningMessage(text) {
    const infoPanel = this.secondaryInfoPanel;
    
    infoPanel.innerHTML = "";
    infoPanel.appendChild(this.createElementWithText("p", text, ""));
    infoPanel.setAttribute("class", this.appStyles.infoWarningStyles);
    infoPanel.removeAttribute("hidden");                         
  }
  
  updateSessionStats(model) {
    const statsList = this.currentStatsList;
    statsList.innerHTML = "";
    
    let text = `Cards Remaining: ${model.sessionDeck.length}`;
    statsList.appendChild(this.createElementWithText("li", text,
            this.statsListItemStyles));

    text = `Cards Remembered: ${this.correctCardCount}`;
    statsList.appendChild(this.createElementWithText("li", text,
            this.statsListItemStyles));
  }
  
  updateHistoricalStats(model){
    const statsList = this.historicalStatsList;
    statsList.innerHTML = "";
    
    let text = `Session Number: ${model.sessionCount}`;
    statsList.appendChild(this.createElementWithText("li", text,
            this.statsListItemStyles));

    text = `Cards Mastered: ${model.retired.length}`;
    statsList.appendChild(this.createElementWithText("li", text,
            this.statsListItemStyles));
  }
  
  
}