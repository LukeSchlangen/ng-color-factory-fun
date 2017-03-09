colorBlocks.controller('SettingsController', ['DataFactory', function(DataFactory, $scope) {
  console.log("settings controller running");
  var self = this;
  // self.colors = DataFactory.colors;
  self.newColor = {};
  self.colorList = DataFactory.allColors;

  console.log(self.colorList.name);
  self.addColor = function() {
    self.colors.push(self.newColor.name);
    console.log(self.colorList);
    self.newColor = {};
  };

}]);
