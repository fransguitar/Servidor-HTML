$(document).ready(function () {
    var brithdate= $("#date").val();
    var hoy = new Date();
    var dd=0;
    var m;
    $("#edad").click(function (e) { 
        e.preventDefault();
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
});