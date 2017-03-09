colorBlocks.controller('GameController', ['DataFactory',  function(DataFactory) {

console.log('game controller running');

var self = this;
self.colorList = DataFactory.allColors;
self.currentColor = DataFactory.randomColor;

// start game
init();
// console.log(DataFactory.allColors.colors);


// resets game to the starting state
function init() {
  DataFactory.updateColors();
}

// click handler for guessing colors
self.handleInput = function(clickedColor) {
  if(clickedColor === self.currentColor) {
    alert('You got it!\n\nNow try another!');
    init();
  } else {
    self.messageText = 'Oh no! You guessed wrong!';
  }
};

self.refresh = function() {
  DataFactory.updateColors();
};

}]);
