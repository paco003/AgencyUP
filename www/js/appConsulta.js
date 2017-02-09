/* 
Proyecto: AgencyUP
Clase: appConsulta.js para definir los metodos de consulta
Autor: Francisco Javier Bautista Juárez
Fecha de creación: 16/01/20017
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
    var rootRef = new Firebase('https://agencyup-b5fcd.firebaseio.com/Consulta/');

    rootRef.on("value", function(snapshot) {
    console.log();

    var data = snapshot.val();

    $("#Table tbody").empty();

    var row = "";

    for (consul in snapshot.val()) {
        console.log(consul, ',', data[consul]);

        row += "<tr>" +
                "<td class=\"Empresa\">" + consul + "</td>" +
                "<td class=\"Contacto\">" + data[consul].Contacto + "</td>" +
                "<td class=\"Trabajador\">" + data[consul].Trabajador + "</td>" +
                "<td class=\"FormaContacto\">" + data[consul].FormaContacto + "</td>" +
                "<td class=\"Necesidad\">" + data[consul].Necesidad + "</td>" +
                "<td class=\"Status\">" + data[consul].Status + "</td>" +
                "<td class=\"Fecha\">" + data[consul].Fecha + "</td>" +
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
                    .find(".Empresa")
                    .text();


                console.log(selectedConsulta)
                rootRef.child(selectedConsulta).remove()
            })


            //*** Editar elemento de la base de datos
            $(".btnEdit").click(function() {
                console.log('clicked')
                var selectedConsulta = $(this).closest("tr")
                    .find(".Empresa")
                    .text();


                //Asignar datos a campos del formulario
                $("#Empresa").val($(this).closest("tr").find(".Empresa").text());
                $("#Contacto").val($(this).closest("tr").find(".Contacto").text());
                $("#Trabajador").val($(this).closest("tr").find(".Trabajador").text());
                $("#FormaContacto").val($(this).closest("tr").find(".FormaContacto").text());
                $("#Necesidad").val($(this).closest("tr").find(".Necesidad").text());
                $("#Status").val($(this).closest("tr").find(".Status").text());
                $("#Fecha").val($(this).closest("tr").find(".Fecha").text());

                $("#btnSend").text("Actualizar").removeClass("btn-primary").addClass("btn-warning").unbind("click").click(function() {

                  rootRef.child(selectedConsulta).update({
                      Contacto: $("#Contacto").val(),
                      Trabajador: $("#Trabajador").val(),
                      FormaContacto: $("#FormaContacto option:selected").text(),
                      Necesidad: $("#Necesidad option:selected").text(),
                      Status: $("#Status option:selected").text(),
                      Fecha: $("#Fecha").val()


                      }, function() {
                      $("#Empresa").val(""); 
                      $("#Contacto").val("");
                      $("#Trabajador").val("");
                      $("#FormaContacto").val("");
                      $("#Necesidad").val("");
                      $("#Status").val("");
                      $("#Fecha").val("");

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
        var Empresa = $("#Empresa").val();

        var dataConsulta = {
            Empresa: Empresa,
            Contacto: $("#Contacto").val(),
            Trabajador: $("#Trabajador").val(),
            FormaContacto: $("#FormaContacto option:selected").text(),
            Necesidad: $("#Necesidad option:selected").text(),
            Status: $("#Status option:selected").text(),
            Fecha: $("#Fecha").val()

        }

        rootRef.once('value', function(snapshot){
        if(snapshot.hasChild(Empresa)){
            $('#myModal').modal('show');
        } else {
            rootRef.child(Empresa).set(dataConsulta);
        }

      })


    }
  })


  
