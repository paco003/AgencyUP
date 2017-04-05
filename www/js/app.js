/*
Proyecto: AgencyUP
Clase: app.js
Autor: Francisco Javier Bautista Juárez
Fecha de creación: 10/02/20017
Fecha de modificación: 15/03/2017

*/

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


.constant('FBURL', 'https://agencyup-b5fcd.firebaseio.com/AgencyUP')


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

.state('NuevaEmpresa', {
    url: '/Empresa/NuevaEmpresa',
    templateUrl: 'templates/Empresa/NuevaEmpresa.html'
})

.state('EditarEmpresa', {
    url: '/Empresa/EditarEmpresa/:empresaId',
    templateUrl: 'templates/Empresa/EditarEmpresa.html'
})

.state('NuevoContacto', {
    url: '/Contacto/NuevoContacto',
    templateUrl: 'templates/Contacto/NuevoContacto.html'
})

.state('EditarContacto', {
    url: '/Contacto/EditarContacto/:contactoID',
    templateUrl: 'templates/Contacto/EditarContacto.html'
})

.state('NuevaConsulta', {
    url: '/Consulta/NuevaConsulta',
    templateUrl: 'templates/Consulta/NuevaConsulta.html'
})

.state('EditarConsulta', {
    url: '/Consulta/EditarConsulta/:consultasID',
    templateUrl: 'templates/Consulta/EditarConsulta.html'
})

.state('NuevaCotizacion', {
    url: '/Cotizaciones/NuevaCotizacion',
    templateUrl: 'templates/Cotizaciones/NuevaCotizacion.html'
})

.state('EditarCotizacion', {
    url: '/Cotizaciones/EditarCotizacion/:consultasID',
    templateUrl: 'templates/Cotizaciones/EditarCotizacion.html'
})

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app');
  })
