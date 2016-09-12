angular.module("AngularMail")
.controller("inboxCtrl", function($scope, mailService) {
  function init() {
    $scope.selectedMessage = null;
    $scope.mail = mailService.getMail();
  }

  init();
  $scope.selectMessage = function(message) {
    $scope.selectedMessage = message;
  };
});
