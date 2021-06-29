
app.directive('singlelist', function(){
 return{
  restrict: 'E',
  scope: {
   mylist:'='
  },
  templateUrl: 'js/directive/singlelist.html'
 }
})