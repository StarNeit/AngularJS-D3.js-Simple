var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.texts = [  
                      ["Crawling", "Indexing", "Ranking", "Presentation", "Potential Profit"],
                      ["4,946 /", "1,224 /", "759 /", "1,521 /"],
                      ["$31,783.88", "$18,322.472", "$17,200.68", "$50,106.352", "$134,614.06"],
                      ["1.71%", "4.03%", "6.07% (46)", "8.81% (134)"],
                      ["(85)", "(49)"]
                    ];

    $scope.roundRectBorder = ["#f2f2f2", "#f2f2f2", "#f2f2f2", "#f2f2f2", "#f2f2f2"];
    $scope.roundRectFill = ["url(#roundRectGradientUnselected)", "url(#roundRectGradientUnselected)", "url(#roundRectGradientUnselected)", "url(#roundRectGradientUnselected)", "url(#roundRectGradientUnselected)"];

    $scope.polygonBorder = ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"];
    $scope.polygonFill = ["url(#radialGradientUnselected)", "url(#radialGradientUnselected)", "url(#radialGradientUnselected)", "url(#radialGradientUnselected)", "url(#radialGradientUnselected)"];

    $scope.cyllinderBorder = ["#a5a5a5", "#a5a5a5", "#a5a5a5", "#a5a5a5", "#a5a5a5"];

    $scope.arrowBorder = ["#595959", "#595959", "#595959", "#595959", "#595959"];
    $scope.arrowFill = ["#595959", "#595959", "#595959", "#595959", "#595959"];

    $scope.horzArrowBorder = ["#595959", "#595959", "#595959", "#595959", "#595959"];
    $scope.horzArrowFill = ["#595959", "#595959", "#595959", "#595959", "#595959"];

    $scope.changeSelection = function(index) {
      for (i = 0; i < 5; i++) {
        $scope.arrowFill[i] = "#595959";
        $scope.polygonFill[i] = "url(#radialGradientUnselected)";
        $scope.arrowBorder[i] = "#595959";
        $scope.polygonBorder[i] = "#ffffff";
        $scope.roundRectFill[i] = "url(#roundRectGradientUnselected)";
        $scope.cyllinderBorder[i] = "#a5a5a5";
        $scope.roundRectBorder[i] = "#f2f2f2";
      }

      $scope.arrowFill[index] = "#0070c0";
      $scope.polygonFill[index] = "url(#radialGradientSelected)";
      $scope.arrowBorder[index] = "#204c82";
      $scope.polygonBorder[index] = "#17365d";
      $scope.roundRectFill[index] = "url(#roundRectGradientSelected)";
      $scope.cyllinderBorder[index] = "#004065";
      $scope.roundRectBorder[index] = "#00b0f0";

    }
});