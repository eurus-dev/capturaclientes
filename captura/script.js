
$(".enviar").click(function(){

    if($(".nombre").val() == ""){

        alert("el nombre no puede ir vacio");

    }if($(".rut").val()== ""){

        alert("el rut no puede ir vacio");
    }
    else{

        alert("Datos Correcto " + "nombre: " + $(".nombre").val() + " rut: " + $(".rut").val());
    }

});