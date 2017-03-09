colorBlocks.controller('SettingsController', ['DataFactory', function(DataFactory) {
  console.log("settings controller running");
  var self = this;
  // self.colors = DataFactory.colors;
  self.newColor = {};
  self.colorList = DataFactory.allColors;

  console.log(self.colorList.name);
  self.addColor = function() {
    DataFactory.addColor(self.newColor);
  };

}]);
