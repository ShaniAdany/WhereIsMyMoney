angular.module('WhereIsMyMoney', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('eventmenu', {
      url: "/event",
      abstract: true,
      templateUrl: "templates/event-menu.html"
    })
    .state('eventmenu.ItemPage', {
      url: "/ItemPage",
      views: {
        'menuContent' :{
          templateUrl: "templates/ItemPage.html",
          controller: "expenseCtrl"
        }
      }
    })
    .state('eventmenu.expense-view', {
      url: "/expense-view",
      views: {
        'menuContent' :{
          templateUrl: "templates/expense-view.html",
          controller: "expenseCtrl"
        }
      }
    })
  
  $urlRouterProvider.otherwise("/event/ItemPage"); 
})

.controller('MainCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.attendees = [
    { firstname: 'Nicolas', lastname: 'Cage' },
    { firstname: 'Jean-Claude', lastname: 'Van Damme' },
    { firstname: 'Keanu', lastname: 'Reeves' },
    { firstname: 'Steven', lastname: 'Seagal' }
  ];
  
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
})

.controller('expenseCtrl', function($scope) {
  $scope.showForm = true;
  
  $scope.shirtSizes = [
    { text: 'Large', value: 'L' },
    { text: 'Medium', value: 'M' },
    { text: 'Small', value: 'S' }
  ];
  
  $scope.attendee = {};
  $scope.submit = function() {
    if(!$scope.attendee.firstname) {
      alert('Info required');
      return;
    }
    $scope.showForm = false;
    $scope.attendees.push($scope.attendee);
  };
  
});


