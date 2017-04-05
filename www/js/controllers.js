angular.module('controllers', [])

.controller('SplashScreenCtrl', ['$scope', '$http', function($scope, $http) {

$scope.params = {
      'data': {
         'duration' : 4000,
         'backgroundImage' : 'img/background/1.jpg',
         'logo' : 'img/logo/logo.png',
         'redirectTo' : '/leftMenu'
       },
      'theme' : "layout3"
    };

	}])

.controller('LeftMenuCtrl', ['$scope', '$http', function($scope, $http) {
 	$scope.params = {
	    'items': {
	      title: 'Mantarraya',

	      image: 'img/avatar/0.png',
	      containerBodyImage:  "img/background/1.jpg",
	      items: [
	        {
	          icon: "ion-ios-briefcase",
	          pagePath : "templates/Empresa/home.html",
	          title: "Empresas"
	        },
	        {
	          icon: "ion-ios-people",
	          pagePath : "templates/Contacto/Contactos.html",
	          title: "Contactos"
	        },
          {
            icon: "ion-ios-folder",
            pagePath : "templates/Consulta/Consultas.html",
            title: "Consultas"
          },
          {
            icon: "ion-ios-cart-outline",
            pagePath : "templates/Cotizaciones/Cotizaciones.html",
            title: "Cotizaciones"
          },

	      ]
	    },
	    'theme' : "layout1"
  	};
}])



  .controller("EmpresaCtrl",[ '$scope', '$http', 'FBURL', '$ionicLoading',  '$firebaseArray', '$stateParams', '$firebaseObject', '$ionicHistory',  function($scope, $http, FBURL,  $ionicLoading,  $firebaseArray,$stateParams, $firebaseObject, $ionicHistory) {

    var ref = new Firebase(FBURL);

    $scope.empresa = $firebaseArray(ref.child("Empresas"));

    var empresaId = $stateParams.empresaId;

    if (empresaId) {
      $scope.empresaElegida = obtenerEmpresa(empresaId);
    };

    function obtenerEmpresa(empresaId){
      return $firebaseObject(ref.child("Empresas").child(empresaId));

    }

      $scope.editarEmpresa = function(Empresas) {
        $scope.empresaElegida.$save(Empresas);
    }



   $ionicLoading.show({
      template: 'Cargando...'
    });

    $scope.shouldShowDelete = false;
    $scope.shouldShowReorder = false;
    $scope.listCanSwipe = true;


    $scope.empresa.$loaded().then(function (emp) {
        $ionicLoading.hide();
    });



    $scope.eliminar = function (item) {

      $scope.empresa.$remove(item).then(function(ref) {
        ref.key() === item.$id;
        console.log("ID: " + item.$id + " Fue eliminado");
      });

       alert(' ¡Empresa Eliminada con éxito! ');

    }


      $scope.agregar2 = function(Empresa) {
        $scope.empresa.$add(Empresa);

}


    $ionicHistory.nextViewOptions({
      disableBack: true
    });

    $scope.cancel = function(state) {
      $ionicHistory.clearHistory();
      $ionicHistory.clearCache();
      $state.go(state);
    };

  }])




  .controller("ContactoCtrl", [ '$scope', '$http', 'FBURL', '$ionicLoading',  '$firebaseArray', '$stateParams', '$firebaseObject',  function($scope, $http, FBURL,  $ionicLoading,  $firebaseArray,$stateParams, $firebaseObject) {

    var ref = new Firebase(FBURL);

    $scope.contacto = $firebaseArray(ref.child("Contactos"));

    var contactoID = $stateParams.contactoID;

    if (contactoID) {
      $scope.contactoElegido = obtenerContacto(contactoID);
    };

    function obtenerContacto(contactoID){
      return $firebaseObject(ref.child("Contactos").child(contactoID));

    }

      $scope.editarContacto = function(Contactos) {
        $scope.contactoElegido.$save(Contactos);
    }



   $ionicLoading.show({
      template: 'Cargando...'
    });

    $scope.shouldShowDelete = false;
    $scope.shouldShowReorder = false;
    $scope.listCanSwipe = true;


    $scope.contacto.$loaded().then(function (cont) {
        $ionicLoading.hide();
    });



    $scope.eliminar = function (item) {

      $scope.contacto.$remove(item).then(function(ref) {
        ref.key() === item.$id;
        console.log("ID: " + item.$id + " Fue eliminado");
      });

       alert(' Contacto Eliminado con éxito! ');

    }

      $scope.agregar2 = function(Contactos) {
        $scope.contacto.$add(Contactos);

    }
  }])


  .controller("ConsultaCtrl", [ '$scope', '$http', 'FBURL', '$ionicLoading',  '$firebaseArray', '$stateParams', '$firebaseObject',  function($scope, $http, FBURL, $ionicLoading,  $firebaseArray,$stateParams, $firebaseObject) {

    var ref = new Firebase(FBURL);

    $scope.consulta = $firebaseArray(ref.child("Consultas"));

    var consultasID = $stateParams.consultasID;

    if (consultasID) {
      $scope.consultaElegida = obtenerConsulta(consultasID);
    };

    function obtenerConsulta(consultasID){
      return $firebaseObject(ref.child("Consultas").child(consultasID));

    }

      $scope.editarConsulta = function(Consultas) {
        $scope.consultaElegida.$save(Consultas);
    }



   $ionicLoading.show({
      template: 'Cargando...'
    });

    $scope.shouldShowDelete = false;
    $scope.shouldShowReorder = false;
    $scope.listCanSwipe = true;


    $scope.consulta.$loaded().then(function (consul) {
        $ionicLoading.hide();
    });



    $scope.eliminar = function (item) {

      $scope.consulta.$remove(item).then(function(ref) {
        ref.key() === item.$id;
        console.log("ID: " + item.$id + " Fue eliminado");
      });

       alert(' Consulta Eliminado con éxito! ');

    }

      $scope.agregar2 = function(Consultas) {
        $scope.consulta.$add(Consultas);

    }



  }])


  .controller("CotizacionCtrl", [ '$scope', '$http', 'FBURL',  '$ionicLoading', '$firebaseArray', '$stateParams', '$firebaseObject',  function($scope, $http, FBURL, $ionicLoading,  $firebaseArray,$stateParams, $firebaseObject) {

    var ref = new Firebase(FBURL);

    $scope.cotizacion = $firebaseArray(ref.child("Cotizacion"));

    var cotizacionID = $stateParams.cotizacionID;

    if (cotizacionID) {
      $scope.cotizacionElegida = obtenerCotizacion(cotizacionID);
    };

    function obtenerCotizacion(cotizacionID){
      return $firebaseObject(ref.child("Cotizacion").child(cotizacionID));

    }

      $scope.editarCotizacion = function(Cotizacion) {
        $scope.cotizacionElegida.$save(Cotizacion);
    }



   $ionicLoading.show({
      template: 'Cargando...'
    });

    $scope.shouldShowDelete = false;
    $scope.shouldShowReorder = false;
    $scope.listCanSwipe = true;


    $scope.cotizacion.$loaded().then(function (coti) {
        $ionicLoading.hide();
    });



     $scope.eliminar = function (item) {

      $scope.cotizacion.$remove(item).then(function(ref) {
        ref.key() === item.$id;
        console.log("ID: " + item.$id + " Fue eliminado");
      });

       alert(' Consulta Eliminado con éxito! ');

    }

      $scope.agregar2 = function(Cotizacion) {
        $scope.cotizacion.$add(Cotizacion);

    }



  }])
