(function() {
    
    var CustomersController = function ($scope, $log, customersFactory, appSettings) {
    // var CustomersController = function ($scope, customersService) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.customers = [];
        $scope.appSettings = appSettings;

        function init(){            
            // $scope.customers = customersService.getCustomers();
            customersFactory.getCustomers()
                .success(function(customers){
                    $scope.customers = customers;
                })
                .error(function(data, status, headers, config){
                    $log.log(data.error + ' ' + status);
                    //handle error
                });
        }
        init();
        
        $scope.doSort = function(propName) {
           $scope.sortBy = propName;
           $scope.reverse = !$scope.reverse;
        };
    };
    
    CustomersController.$inject = ['$scope','$log', 'customersFactory', 'appSettings'];
    // CustomersController.$inject = ['$scope', 'customersService'];

    angular.module('customersApp')
      .controller('CustomersController', CustomersController);
    
}());