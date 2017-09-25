!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},{id:r.name});t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);void 0!==c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return I[e]=s(D(e.substr(6)));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&"undefined"!=typeof require.resolve&&"undefined"!=typeof process&&process.platform&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l["default"]:l})}}}("undefined"!=typeof self?self:global)

(["1"], [], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
$__System.register("2", ["3", "4", "5"], function (_export) {
  var WebFlashcards, _createClass, _classCallCheck, FlashcardsUI;

  return {
    setters: [function (_3) {
      WebFlashcards = _3["default"];
    }, function (_) {
      _createClass = _["default"];
    }, function (_2) {
      _classCallCheck = _2["default"];
    }],
    execute: function () {
      "use strict";

      FlashcardsUI = (function () {
        function FlashcardsUI(app, model, targetId) {
          _classCallCheck(this, FlashcardsUI);

          this.app = app;
          this.model = model;
          this.targetElement = document.getElementById(targetId);
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
          };
          this.appStyles = this.defaultAppStyles;
        }

        _createClass(FlashcardsUI, [{
          key: "initialize",
          value: function initialize() {
            this.hideElement(this.targetElement);
            this.targetElement.setAttribute("class", this.appStyles.appAreaStyles);

            var infoArea = this.createInfoArea();
            this.targetElement.appendChild(infoArea);

            this.cardArea = this.createCardArea();
            this.cardArea.setAttribute("hidden", "");
            this.targetElement.appendChild(this.cardArea);
          }
        }, {
          key: "show",
          value: function show() {
            this.showElement(this.targetElement);
          }
        }, {
          key: "showCard",
          value: function showCard(card) {
            var side1 = this.currentCard.firstElementChild;
            var side2 = this.currentCard.lastElementChild;

            side1.innerHTML = "";
            side1.appendChild(this.createElementWithText("p", card.side1, ""));
            side1.removeAttribute("hidden", "");

            side2.innerHTML = "";
            side2.appendChild(this.createElementWithText("p", card.side2, ""));
            side2.setAttribute("hidden", "");
            this.cardArea.removeAttribute("hidden");
          }
        }, {
          key: "flipCurrentCard",
          value: function flipCurrentCard() {
            var currentCard = this.currentCard;
            if (currentCard != null) {
              for (var i = 0; i < currentCard.children.length; i++) {
                var sideOfCard = currentCard.children[i];
                if (sideOfCard.hasAttribute("hidden")) {
                  sideOfCard.removeAttribute("hidden");
                }
              }
            }
          }
        }, {
          key: "createElement",
          value: function createElement(type, styles) {
            var element = document.createElement(type);
            if (styles != null && styles.trim().length > 0) {
              element.setAttribute("class", styles);
            }
            return element;
          }
        }, {
          key: "createElementWithText",
          value: function createElementWithText(type, text, styles) {
            var element = document.createElement(type);
            if (styles != null && styles.trim().length > 0) {
              element.setAttribute("class", styles);
            }
            if (text != null && text.trim().length > 0) {
              element.appendChild(document.createTextNode(text));
            }
            return element;
          }
        }, {
          key: "createCardArea",
          value: function createCardArea() {
            var div = this.createElement("div", this.appStyles.cardDivStyles);

            this.currentCard = this.createElement("div", this.appStyles.cardStyles);
            div.appendChild(this.currentCard);
            this.currentCard.appendChild(this.createElement("div", this.appStyles.cardSide1Styles));
            this.currentCard.appendChild(this.createElement("div", this.appStyles.cardSide2Styles));

            var cardButtons = this.createCardButtons();
            div.appendChild(cardButtons);

            return div;
          }
        }, {
          key: "createCardButtons",
          value: function createCardButtons() {
            var _this = this;

            var buttonArea = this.createElement("div", this.appStyles.cardButtonAreaStyles);
            var div = this.createElement("div", this.appStyles.cardButtonDivStyles);
            buttonArea.appendChild(div);

            var styles = this.appStyles.buttonStyles + " " + this.appStyles.buttonPrimaryStyles;
            var btnFlip = this.createElementWithText("button", "Flip", styles);
            div.appendChild(btnFlip);

            styles = this.appStyles.buttonStyles + " " + this.appStyles.buttonCorrectStyles;
            var btnCorrect = this.createElementWithText("button", "Correct!", styles);
            btnCorrect.setAttribute("hidden", "");
            div.appendChild(btnCorrect);

            styles = this.appStyles.buttonStyles + " " + this.appStyles.buttonIncorrectStyles;
            var btnIncorrect = this.createElementWithText("button", "Incorrect", styles);
            btnIncorrect.setAttribute("hidden", "");
            div.appendChild(btnIncorrect);

            btnFlip.addEventListener("click", function () {
              btnFlip.setAttribute("hidden", "");
              btnCorrect.removeAttribute("hidden");
              btnIncorrect.removeAttribute("hidden");
              _this.flipCurrentCard();
            });

            btnCorrect.addEventListener("click", function () {
              btnCorrect.setAttribute("hidden", "");
              btnIncorrect.setAttribute("hidden", "");
              btnFlip.removeAttribute("hidden");
              _this.cardArea.setAttribute("hidden", "");
              _this.correctCardCount += 1;
              _this.app.cardCorrect();
            });

            btnIncorrect.addEventListener("click", function () {
              btnIncorrect.setAttribute("hidden", "");
              btnCorrect.setAttribute("hidden", "");
              btnFlip.removeAttribute("hidden");
              _this.cardArea.setAttribute("hidden", "");
              _this.app.cardIncorrect();
            });

            return buttonArea;
          }
        }, {
          key: "clearSecondaryMessages",
          value: function clearSecondaryMessages() {
            var infoPanel = this.secondaryInfoPanel;
            infoPanel.innerHTML = "";
            this.hideElement(infoPanel);
          }
        }, {
          key: "createInfoArea",
          value: function createInfoArea() {
            var infoArea = this.createElement("div", this.appStyles.infoAreaStyles);
            this.mainInfoPanel = this.createMainInfoPanel();
            infoArea.appendChild(this.mainInfoPanel);

            this.secondaryInfoPanel = document.createElement("div");
            this.hideElement(this.secondaryInfoPanel);
            infoArea.appendChild(this.secondaryInfoPanel);

            return infoArea;
          }
        }, {
          key: "createMainInfoPanel",
          value: function createMainInfoPanel() {
            var infoPanel = this.createElement("div", this.appStyles.infoPrimaryStyles);

            var statsDiv = this.createElement("div", this.appStyles.statsDivStyles);
            infoPanel.appendChild(statsDiv);

            var currentStats = this.createSessionStatsDiv();
            statsDiv.appendChild(currentStats);

            var historicalStats = this.createHistoricalStatsDiv();
            statsDiv.appendChild(historicalStats);

            return infoPanel;
          }
        }, {
          key: "createSessionStatsDiv",
          value: function createSessionStatsDiv() {
            this.currentStatsList = this.createElement("ul", this.appStyles.statsListStyles);

            var currentStats = this.createElement("div", this.appStyles.statsGroupStyles);
            currentStats.appendChild(this.createElementWithText("h3", "Session Info", this.appStyles.statsHeadingStyles));
            currentStats.appendChild(this.currentStatsList);
            return currentStats;
          }
        }, {
          key: "createHistoricalStatsDiv",
          value: function createHistoricalStatsDiv() {
            this.historicalStatsList = this.createElement("ul", this.appStyles.statsListStyles);

            var historicalStats = this.createElement("div", this.appStyles.statsGroupStyles);
            historicalStats.appendChild(this.createElementWithText("h3", "Historical Info", this.appStyles.statsHeadingStyles));
            historicalStats.appendChild(this.historicalStatsList);
            return historicalStats;
          }
        }, {
          key: "hideElement",
          value: function hideElement(element) {
            element.setAttribute("hidden", "");
          }
        }, {
          key: "showElement",
          value: function showElement(element) {
            element.removeAttribute("hidden");
          }
        }, {
          key: "showErrorMessage",
          value: function showErrorMessage(text) {
            this.showInfoPanel(text, this.appStyles.infoErrorStyles);
          }
        }, {
          key: "showWarningMessage",
          value: function showWarningMessage(text) {
            this.showInfoPanel(text, this.appStyles.infoWarningStyles);
          }
        }, {
          key: "showSuccessMessage",
          value: function showSuccessMessage(text) {
            this.showInfoPanel(text, this.appStyles.infoSuccessStyles);
          }
        }, {
          key: "showInfoPanel",
          value: function showInfoPanel(text, styles) {
            var infoPanel = this.secondaryInfoPanel;

            infoPanel.innerHTML = "";
            infoPanel.appendChild(this.createElementWithText("p", text, ""));
            infoPanel.setAttribute("class", styles);
            this.showElement(infoPanel);
          }
        }, {
          key: "updateSessionStats",
          value: function updateSessionStats(model) {
            var statsList = this.currentStatsList;
            statsList.innerHTML = "";

            var text = "Cards Remaining: " + model.sessionDeck.length;
            statsList.appendChild(this.createElementWithText("li", text, this.statsListItemStyles));

            text = "Cards Remembered: " + this.correctCardCount;
            statsList.appendChild(this.createElementWithText("li", text, this.statsListItemStyles));
          }
        }, {
          key: "updateHistoricalStats",
          value: function updateHistoricalStats(model) {
            var statsList = this.historicalStatsList;
            statsList.innerHTML = "";

            var text = "Session Number: " + model.sessionCount;
            statsList.appendChild(this.createElementWithText("li", text, this.statsListItemStyles));

            text = "Cards Mastered: " + model.retired.length;
            statsList.appendChild(this.createElementWithText("li", text, this.statsListItemStyles));
          }
        }]);

        return FlashcardsUI;
      })();

      _export("default", FlashcardsUI);
    }
  };
});
$__System.registerDynamic("6", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var $Object = Object;
  module.exports = {
    create: $Object.create,
    getProto: $Object.getPrototypeOf,
    isEnum: {}.propertyIsEnumerable,
    getDesc: $Object.getOwnPropertyDescriptor,
    setDesc: $Object.defineProperty,
    setDescs: $Object.defineProperties,
    getKeys: $Object.keys,
    getNames: $Object.getOwnPropertyNames,
    getSymbols: $Object.getOwnPropertySymbols,
    each: [].forEach
  };
});
$__System.registerDynamic('7', ['6'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var $ = $__require('6');
  module.exports = function defineProperty(it, key, desc) {
    return $.setDesc(it, key, desc);
  };
});
$__System.registerDynamic("8", ["7"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = { "default": $__require("7"), __esModule: true };
});
$__System.registerDynamic("4", ["8"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var _Object$defineProperty = $__require("8")["default"];
  exports["default"] = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        _Object$defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  exports.__esModule = true;
});
$__System.registerDynamic("5", [], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  exports["default"] = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  exports.__esModule = true;
});
$__System.register("3", ["4", "5"], function (_export) {
  var _createClass, _classCallCheck, FlashcardsModel;

  return {
    setters: [function (_) {
      _createClass = _["default"];
    }, function (_2) {
      _classCallCheck = _2["default"];
    }],
    execute: function () {
      "use strict";

      FlashcardsModel = (function () {
        function FlashcardsModel(targetId) {
          _classCallCheck(this, FlashcardsModel);

          this.sessionDeck = [];
          this.progressDecks = [[], [], [], [], [], [], [], [], [], []];
          this.retired = [];
          this.sessionCount = -1;
          this.currentCard = null;
          this.cardsets = [];
        }

        _createClass(FlashcardsModel, [{
          key: "addNewCards",
          value: function addNewCards(key, cards, cardInfo) {
            var _this = this;

            this.cardsets.push(key);
            var index = this.sessionCount % 10;
            var card = null;
            cards.forEach(function (card) {
              card.info = cardInfo;
              card.successDeck = _this.progressDecks[index];
              _this.sessionDeck.push(card);
            });
          }
        }, {
          key: "getSaveData",
          value: function getSaveData() {
            var _ref;

            return _ref = this, sessionCount = _ref.sessionCount, sessionDeck = _ref.sessionDeck, progressDecks = _ref.progressDecks, retired = _ref.retired, _ref;
          }
        }, {
          key: "loadData",
          value: function loadData(object) {
            if (object != null) {
              this.sessionCount = object.sessionCount;
              this.sessionDeck = object.sessionDeck;
              this.progressDecks = object.progressDecks;
              this.retired = object.retired;
              this.cardsets = object.cardsets;
            }
          }
        }, {
          key: "prepareSession",
          value: function prepareSession() {
            //this.sessionDeck = [];
            this.sessionCount += 1;

            var index = this.sessionCount % 10;
            var progressDeck = this.progressDecks[index];
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
        }, {
          key: "markCorrect",
          value: function markCorrect() {
            var card = this.currentCard;
            var target = card.successDeck;
            delete card.successDeck;
            target.push(card);
          }
        }, {
          key: "markIncorrect",
          value: function markIncorrect() {
            this.sessionDeck.push(this.currentCard);
          }
        }, {
          key: "next",
          value: function next() {
            var max = this.sessionDeck.length;
            var index = Math.floor(Math.random() * max);
            this.currentCard = this.sessionDeck[index];
            this.sessionDeck.splice(index, 1);
          }
        }]);

        return FlashcardsModel;
      })();

      _export("default", FlashcardsModel);
    }
  };
});
$__System.register("9", ["2", "3", "4", "5"], function (_export) {
  var FlashcardsUI, WebFlashcards, _createClass, _classCallCheck, WebFlashcardApp;

  return {
    setters: [function (_3) {
      FlashcardsUI = _3["default"];
    }, function (_4) {
      WebFlashcards = _4["default"];
    }, function (_) {
      _createClass = _["default"];
    }, function (_2) {
      _classCallCheck = _2["default"];
    }],
    execute: function () {
      "use strict";

      WebFlashcardApp = (function () {
        function WebFlashcardApp(targetId, debug) {
          _classCallCheck(this, WebFlashcardApp);

          this.model = new WebFlashcards();
          this.appUi = new FlashcardsUI(this, this.model, targetId);
        }

        _createClass(WebFlashcardApp, [{
          key: "init",
          value: function init() {
            var saveData = this.loadFromBrowser();
            this.model.prepareSession();
            this.appUi.initialize();
            if (this.getSessionCardCount() > 0) {
              this.startSession();
            }
          }
        }, {
          key: "getSessionCardCount",
          value: function getSessionCardCount() {
            return this.model.sessionDeck.length;
          }
        }, {
          key: "addNewCards",
          value: function addNewCards(cardset) {
            var key = cardset.about.id;
            if (this.model.cardsets.filter(function (item) {
              return item === key;
            }).length > 0) {
              this.appUi.showWarningMessage("Sorry, that cardset has already been loaded.");
            } else {
              this.model.addNewCards(key, cardset.cards, cardset.about);
              this.appUi.updateSessionStats(this.model);
            }
            this.saveToBrowser();
          }
        }, {
          key: "cardCorrect",
          value: function cardCorrect() {
            this.appUi.clearSecondaryMessages();
            this.model.markCorrect();
            this.nextCard();
          }
        }, {
          key: "cardIncorrect",
          value: function cardIncorrect() {
            this.appUi.clearSecondaryMessages();
            this.model.markIncorrect();
            this.nextCard();
          }
        }, {
          key: "loadFromBrowser",
          value: function loadFromBrowser() {
            var saveData = localStorage.getItem("webFlashcardData");
            if (saveData != null) {
              var object = JSON.parse(saveData);
              this.model.loadData(object);
            }
          }
        }, {
          key: "nextCard",
          value: function nextCard() {
            this.saveToBrowser();
            if (this.getSessionCardCount() > 0) {
              this.model.next();
              this.appUi.showCard(this.model.currentCard);
              this.appUi.updateSessionStats(this.model);
            } else {
              this.appUi.showSuccessMessage("All cards completed for this session!");
            }
          }
        }, {
          key: "startSession",
          value: function startSession() {
            this.appUi.updateSessionStats(this.model);
            this.appUi.updateHistoricalStats(this.model);
            this.appUi.show();
            this.nextCard();
          }
        }, {
          key: "saveToBrowser",
          value: function saveToBrowser() {
            var object = {
              sessionCount: this.model.sessionCount,
              sessionDeck: this.model.sessionDeck,
              progressDecks: this.model.progressDecks,
              retired: this.model.retired,
              cardsets: this.model.cardsets
            };
            localStorage.setItem("webFlashcardData", JSON.stringify(object));
          }
        }]);

        return WebFlashcardApp;
      })();

      _export("default", WebFlashcardApp);
    }
  };
});
$__System.register("1", ["9"], function (_export) {
  "use strict";

  var WebFlashcardApp;
  return {
    setters: [function (_) {
      WebFlashcardApp = _["default"];
    }],
    execute: function () {
      $(function () {

        var wfApp = new WebFlashcardApp("cardapp");
        var appStarted = false;
        wfApp.init();
        if (wfApp.getSessionCardCount() < 1) {
          $("#welcome").show();
        }

        $("#app-start").on("click", function () {
          if (wfApp.getSessionCardCount() > 0) {
            $("#app-start").hide();
            $("#welcome").hide();
            wfApp.startSession();
          }
        });

        $("#joyful-jp-l1").on("click", function () {
          $.getJSON("data/joyful-jp-l1.json", function (data) {
            wfApp.addNewCards(data);
            if (!appStarted) {
              $("#app-start").show();
            }
          });
        });

        $("#joyful-jp-l2").on("click", function () {
          $.getJSON("data/joyful-jp-l2.json", function (data) {
            wfApp.addNewCards(data);
            if (!appStarted) {
              $("#app-start").show();
            }
          });
        });

        $("#joyful-jp-l3").on("click", function () {
          $.getJSON("data/joyful-jp-l3.json", function (data) {
            wfApp.addNewCards(data);
            if (!appStarted) {
              $("#app-start").show();
            }
          });
        });

        $("#joyful-jp-travel-l1").on("click", function () {
          $.getJSON("data/joyful-jp-travel-l1.json", function (data) {
            wfApp.addNewCards(data);
            if (!appStarted) {
              $("#app-start").show();
            }
          });
        });

        $("#joyful-jp-travel-l3").on("click", function () {
          $.getJSON("data/joyful-jp-travel-l3.json", function (data) {
            wfApp.addNewCards(data);
            if (!appStarted) {
              $("#app-start").show();
            }
          });
        });
      });
    }
  };
});
})
(function(factory) {
  factory();
});
//# sourceMappingURL=build.js.map