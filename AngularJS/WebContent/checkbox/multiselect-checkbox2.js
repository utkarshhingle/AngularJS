var app = angular.module('foo', [])
  

app.controller('main', function($scope){
    
    $scope.showOptions = false;
    
    $scope.toggle = function(){
        $scope.showOptions = !$scope.showOptions;
    }

    $scope.options = ['Car', 'Lorry' , 'Motorbike', 'Bus', 'Train', 'Airplane']
    $scope.selected = [];
    $scope.update = function(){
         $scope.count = $scope.selected.filter(isSelected).length
         console.log($scope.selected.filter(isSelected));
    }
   
    
    function isSelected(element) {return element;}

})