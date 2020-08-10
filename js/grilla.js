$(document).ready(function () {
    var val;
    $("#cargar").click(function (e) { 
        e.preventDefault();
        $.ajax({
            type: "GET",
            url: "https://jsonplaceholder.typicode.com/users",
            dataType: "JSON",
            success: function (data) {
                for (let i = 0; i < data.length; i++) {
                    val+=`<tr>
                    <td>${data[i].id}</td>
                    <td>${data[i].name}</td>
                    <td>${data[i].username}</td>
                    <td>${data[i].email}</td>
                    <td>${data[i].id}</td>
                    <td>${data[i].phone}</td>
                    <td>${data[i].website}</td>
                    <td>${data[i].id}</td>
                    </tr>`;
                    console.log(data[i].id);
                   $("#rows").html(val);
                }
            }
        });
    });
    
});