(function(){

 console.log('good2')

 var app = angular.module('directivesModule', []);

 app.directive('helloWorld', function(){
  return{
   template: 'Hello World'
  };
 });
}());
