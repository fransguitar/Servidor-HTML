$(document).ready(function () {
    var hoy = new Date();
    var dd=0;
    var m;
    var sen=0;
    $("#alert").hide();

    $("#edad").click(function (e) { 
        e.preventDefault();
        var brithdate= $("#date").val();
        var hoyy= hoy.getFullYear();
        brithdate= new Date(brithdate);
        var brithdatey= brithdate.getFullYear();
        dd=hoyy-brithdatey;
        m = hoy.getMonth() - brithdate.getMonth();
        if (m < 0 || (m === 0 && hoy.getDate() < brithdate.getDate())) {
            dd--;
        }
        $("#edad").val(dd);
        
    });
    $("#user").on("keypress", function (event) {
        var regex = new RegExp("^[a-zA-Z0-9]+$");
        var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        var code=event.keyCode;
        if (!regex.test(key)) {
            $("#alert").show();
         }
        
        
    });
    $("#register").click(function (e) { 
        e.preventDefault();
        var psw=$("#psw").val();
        var psw2=$("#psw2").val();
        if ((psw != psw2) || ($("#psw").val().length) == 0) {
            
        }
        else{
            
        }
        
    });
});