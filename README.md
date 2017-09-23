#flashcard-app

## About
This is a flashcard app that works with a [Leitner Model](https://en.wikipedia.org/wiki/Leitner_system) of 5 proficiency models. The cards are managed across sessions (locally w/in the web browser) in a series of decks. As cards are remembered they are placed into the next level of proficiency decks. If a card is forgotten, it is placed back into the main deck. Once cards have been consistently remembered across 4 sessions, it is considered mastered and pulled from the deck to make room for new cards.

The demo cards are for learning Japanese, but the setup isn't particular to language flashcards. 

## Build & Run It
This application is setup to use the ES6 module system, so at least at the time of writing, that's not supported by the browsers.  To fill that gap, this demo app is built to use jspm for module management. 

If you don't have Node.js & npm, install that first. 

Then you can use npm to install jspm. Go into the project directory and run:
```
$ npm install jspm --save-dev
$
```

After installing jspm go into the projects js directory and run:
```
$ jspm init
$
```