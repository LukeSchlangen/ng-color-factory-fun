colorBlocks.factory('DataFactory', ['$http', function($http) {
  console.log("data factory running");
  var blockColors = {
    colors: [],
    randomColor: {}
  };

  // getColors();

  function getColors() {
    console.log('datafactory started ajax');
    return $http({
      method: 'GET',
      url: '/colors',
    }).then(function(response) {
      blockColors.colors = response.data;
      console.log('datafactory ', blockColors.colors);
      blockColors.randomColor = blockColors.colors[randomNumber(0, blockColors.colors.length - 1)];
      console.log('datafactory ', blockColors.randomColor);
    }, function(response) {
      console.log(response);
    });
  }

  //UTILITY FUNCTIONS
  function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
  }

  console.log(blockColors.randomColor);

  return {
    allColors: blockColors,
    updateColors: getColors
  };
}]);
