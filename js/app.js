var myApp = angular.module('myApp', []);
myApp.controller('RegistrationController', function($scope) {
  $scope.register = function() {
     $scope.message = 'ようこそ' + $scope.user.firstname + 'さん';
  }
});