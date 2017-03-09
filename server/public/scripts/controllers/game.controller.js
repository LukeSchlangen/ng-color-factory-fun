colorBlocks.controller('GameController', ['DataFactory',  function(DataFactory) {

console.log('game controller running');
// console.log(DataFactory);
var self = this;
self.colorList = DataFactory.allColors;

self.factory = DataFactory;
self.currentColor = self.factory.allColors.randomColor.name;

// start game
init();
// console.log(DataFactory.allColors.colors);


// resets game to the starting state
function init() {
  DataFactory.updateColors().then(function(response) {
    console.log('controller ajax completed');
    self.messageText = "";
    // self.currentColor = DataFactory.allColors.randomColor.name;
    console.log('self.currentColor after ajax', self.currentColor);
    self.colorPrompt = 'Can you find the ' + self.currentColor + ' block?';
  });
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
