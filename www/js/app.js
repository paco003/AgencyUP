
angular.module("todoList", ["ionic", "firebase", 'ngSplashScreen', 'controllers', 'ngLeftMenu'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {

      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);


      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.factory("ToDos", function($firebaseArray) {
  var toDosRef = new Firebase("https://agencyup-b5fcd.firebaseio.com/");
  return $firebaseArray(toDosRef);
})


.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
      url: '/app',
      templateUrl: 'templates/splashscreen.html',
      controller: 'SplashScreenCtrl'
    })


.state('leftMenu', {
    url: '/leftMenu',
    templateUrl: 'templates/leftMenu.html',
    controller: 'LeftMenuCtrl'
})

.state('home', {
    url: '/home',
    views:{
      'home' : {
          templateUrl: 'templates/home.html',
          controller: 'MainController'

      }
    }

});



    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app');
  })

