//the controller can set the data in scope
app.controller('MainController', ['$scope', function($scope){
 $scope.todo = {
  list: ['clean room', 'paint it', 'study']
 } 

 $scope.books = {
  list: []
 }
 $scope.addItem = function(itemList, item){ //addItem is a new attribute with a value of a function
  itemList.push(item);
 }
}]);