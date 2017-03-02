angular.module('controllers', [])

//Controlador del SplashScreen de la aplicación(Animacón del inicio)
.controller('SplashScreenCtrl', ['$scope', function($scope) {

$scope.params = {
      'data': {
         'duration' : 4000,
         'backgroundImage' : 'img/background/33.jpg',
         'logo' : 'img/logo/logo.png',
         'redirectTo' : '/leftMenu'
       },
      'theme' : "layout1"
    };

	}])

//Controlador del LeftMenu de la aplicación(Menú lateral)
.controller('LeftMenuCtrl', ['$scope', function($scope) {
 	$scope.params = {
	    'items': {
	      title: 'Mantarraya',
	      
	      image: 'img/avatar/0.png',
	      containerBodyImage:  "img/background/29.jpg",
	      items: [
	        {
	          icon: "ion-ios-briefcase",
	          pagePath : "templates/home.html",
	          title: "Empresas"
	        },
	        {
	          icon: "ion-ios-people",
	          pagePath : "templates/leftMenuPage2.html",
	          title: "Contactos"
	        },
          {
            icon: "ion-ios-folder",
            pagePath : "templates/Consultas.html",
            title: "Consultas"
          },
          {
            icon: "ion-ios-cart-outline",
            pagePath : "templates/leftMenuPage2.html",
            title: "Cotizaciones"
          },

	      ]
	    },
	    'theme' : "layout1"
  	};
}])



  // Inicio del controlador encargado de procesar los metodos de Empresas(Insert, UpDate, Delete) 
  .controller("EmpresaCtrl", function($scope, ToDos, $ionicPopup, $ionicLoading, $ionicModal) {

   //Metodo para mostrar un mensaje mientras cargan los datos
   $ionicLoading.show({
      template: 'Cargando...'
    });

    /** Configuraciones para la lista de Empresas */
    $scope.shouldShowDelete = false;
    $scope.shouldShowReorder = false;
    $scope.listCanSwipe = true;

    // Se obtiene la referencia al objeto que contiene la información de la empresa
    $scope.empresa = ToDos;

    $scope.empresa.$loaded().then(function (emp) {
        $ionicLoading.hide();
    });

    // Funcion encargada de eliminar Empresas
    $scope.eliminar = function (item) {

      $scope.empresa.$remove(item).then(function(ref) {
        ref.key() === item.$id; // true
        console.log("ID: " + item.$id + " Fue eliminado");
      });

    }

    // Funcion encargada de editar Empresas
    $scope.editar = function (toDo) {

      $scope.data = {
        "toDoEditado": toDo.Empresa
      };

        var myPopup = $ionicPopup.show({
          template: '<input type="text" ng-model="data.toDoEditado">',
          title: '¿Que vas a hacer?',
          scope: $scope,
          buttons: [
            { text: 'Cancelar' },
            {
              text: '<b>Guardar</b>',
              type: 'button-positive',
              onTap: function(e) {

                console.log($scope.data.toDoEditado);
                if (!$scope.data.toDoEditado) {
                  console.log("No ingreso nada");
                  //don't allow the user to close unless he enters wifi password
                  e.preventDefault();
                } else {
                  console.log("Ingreso " +  $scope.data.toDoEditado);

                  toDo.Empresa = $scope.data.toDoEditado;

                  $scope.empresa.$save(toDo).then(function(ref) {
                    ref.key() === toDo.$id; // true
                    console.log("Editado registro " + toDo.$id);
                  });

                  return $scope.data.toDoEditado;
                }
              }
            }
          ]
        });
    }

 // Se inicializa la ventana modal
  $ionicModal.fromTemplateUrl('home.html', {

      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {

      $scope.modal = modal;
    });

    $scope.openModal = function() {
      $scope.modal.show();
    };

    $scope.closeModal = function() {
      $scope.modal.hide();
    };



    $ionicModal.fromTemplateUrl('home.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });

      //Funcion encargada de Agregar Empresas
      $scope.agregar2 = function(Empresa, Email, Direccion, Telefono) {
          $scope.empresa.$add({
            Empresa_Nombre: Empresa,
            Empresa_Email: Email,
            Empresa_Direccion: Direccion,
            Empresa_Telefono: Telefono

              });

          $scope.modal.hide();

    };

  })





 // Inicio del controlador encargado de procesar los metodos de Consultas (Insert, UpDate, Delete) 
  .controller("ConsultaCtrl", function($scope, ToDos, $ionicPopup, $ionicLoading, $ionicModal) {

   //Metodo para mostrar un mensaje mientras cargan los datos
   $ionicLoading.show({
      template: 'Cargando...'
    });

    /** Configuraciones para la lista de Consultas */
    $scope.shouldShowDelete = false;
    $scope.shouldShowReorder = false;
    $scope.listCanSwipe = true;

    // Se obtiene la referencia al objeto que contiene la información de la Consultas
    $scope.toDos = ToDos;

    $scope.toDos.$loaded().then(function (todo) {
        $ionicLoading.hide();
    });

    // Funcion encargada de eliminar Consultas
    $scope.eliminar = function (item) {

      $scope.toDos.$remove(item).then(function(ref) {
        ref.key() === item.$id; // true
        console.log("ID: " + item.$id + " Fue eliminado");
      });

    }

    // Funcion encargada de editar Consultas
    $scope.editar = function (toDo) {

      $scope.data = {
        "toDoEditado": toDo.Empresa
      };

        var myPopup = $ionicPopup.show({
          template: '<input type="text" ng-model="data.toDoEditado">',
          title: '¿Que vas a hacer?',
          scope: $scope,
          buttons: [
            { text: 'Cancelar' },
            {
              text: '<b>Guardar</b>',
              type: 'button-positive',
              onTap: function(e) {

                console.log($scope.data.toDoEditado);
                if (!$scope.data.toDoEditado) {
                  console.log("No ingreso nada");
                  //don't allow the user to close unless he enters wifi password
                  e.preventDefault();
                } else {
                  console.log("Ingreso " +  $scope.data.toDoEditado);

                  toDo.Empresa = $scope.data.toDoEditado;

                  $scope.toDos.$save(toDo).then(function(ref) {
                    ref.key() === toDo.$id; // true
                    console.log("Editado registro " + toDo.$id);
                  });

                  return $scope.data.toDoEditado;
                }
              }
            }
          ]
        });
    }

 // Se inicializa la ventana modal
  $ionicModal.fromTemplateUrl('home.html', {

      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {

      $scope.modal = modal;
    });

    $scope.openModal = function() {
      $scope.modal.show();
    };

    $scope.closeModal = function() {
      $scope.modal.hide();
    };



    $ionicModal.fromTemplateUrl('home.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });

      //Funcion encargada de Agregar Consultas
      $scope.agregar2 = function(Empresa, Contacto, Trabajador, FormaContacto, Necesidad, Status, Fecha) {
          $scope.toDos.$add({
            Consulta_Empresa: Empresa,
            Consulta_Contacto: Contacto,
            Consulta_Trabajador: Trabajador,
            Consulta_FormaContacto: FormaContacto,
            Consulta_Necesidad: Necesidad,
            Consulta_Status: Status,
            Consulta_Fecha: Fecha


              });

          $scope.modal.hide();

    };

  });

// Fin del controlador encargado de procesar los metodos de Consultas
