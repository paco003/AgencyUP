/* 
Proyecto: AgencyUP
Clase: appContactos.js para definir los metodos de Contactos
Autor: Francisco Javier Bautista Juárez
Fecha de creación: 08/02/20017
Fecha de modificación: 08/02/2017

*/


angular.module('starter', ['ionic',  'firebase'])

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

.controller("ExampleController", function($scope){
  $scope.submit = function(empresa){

  }
});



  // Se inica la conexión con la base de datos
  // Metodo para visualizar elementos dentro de la base de datos

  $(document).ready(function() {
    //variable para la referencia a l base de datos rootRef
    var rootRef = new Firebase('https://agencyup-b5fcd.firebaseio.com/Contacto/');

    rootRef.on("value", function(snapshot) {
    console.log();

    var data = snapshot.val();

    $("#Table tbody").empty();

    var row = "";

    for (consul in snapshot.val()) {
        console.log(consul, ',', data[consul]);

        row += "<tr>" +
                "<td class=\"Nombre\">" + consul + "</td>" +
                "<td class=\"Email\">" + data[consul].Email + "</td>" +
                "<td class=\"Telefono\">" + data[consul].Telefono + "</td>" +
                "<td> <div class=\"btnEdit button button-outline button-energized glyphicon glyphicon-edit\"></div> </td>" +
                "<td> <div class=\"btnDelete button button-outline button-assertive glyphicon glyphicon-remove\"></div> </td>" +
                "</tr>"
        }
            // Mensajes en la consola del navegador(row)

            //class="button button-outline button-positive"

            $("#Table tbody").append(row);
            row = "";


            //*** Borrar elemento de la base de datos 
            $(".btnDelete").click(function() {
                console.log('clicked')
                var selectedConsulta = $(this).closest("tr")
                    .find(".Nombre")
                    .text();


                console.log(selectedConsulta)
                rootRef.child(selectedConsulta).remove()
            })


            //*** Editar elemento de la base de datos
            $(".btnEdit").click(function() {
                console.log('clicked')
                var selectedConsulta = $(this).closest("tr")
                    .find(".Nombre")
                    .text();


                //Asignar datos a campos del formulario
                $("#Nombre").val($(this).closest("tr").find(".Nombre").text());
                $("#Email").val($(this).closest("tr").find(".Email").text());
                $("#Telefono").val($(this).closest("tr").find(".Telefono").text());
                $("#btnSend").text("Actualizar").removeClass("btn-primary").addClass("btn-warning").unbind("click").click(function() {

                  rootRef.child(selectedConsulta).update({
                      Email: $("#Email").val(),
                      Telefono: $("#Telefono").val()


                      }, function() {
                      $("#Nombre").val(""); 
                      $("#Email").val("");
                      $("#Telefono").val("");

                      $("#btnSend").text("Enviar").removeClass("btn-warning").addClass("btn-primary").unbind("click").click(sendData);

                      })

                });
            })
            $("#btnSend").click(sendData);

        }, function(errorObject) {
            console.log("The read failed: " + errorObject.code);
        });


    //*** Envia los datos a la base de datos
    function sendData() {
        var Nombre = $("#Nombre").val();

        var dataConsulta = {
            Nombre: Nombre,
            Email: $("#Email").val(),
            Telefono: $("#Telefono").val()

        }

        rootRef.once('value', function(snapshot){
        if(snapshot.hasChild(Nombre)){
            $('#myModal').modal('show');
        } else {
            rootRef.child(Nombre).set(dataConsulta);
        }

      })


    }
  })


  
