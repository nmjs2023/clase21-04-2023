/*https://pokeapi.co/api/v2/pokemon/ditto*/

var btnConsultar = document.querySelector('#btnConsultar');
/* console.log(btnConsultar); */
/* 
btnConsultar.addEventListener('click', function () {
    btnConsultar.setAttribute('class', 'btn btn-danger')
    
})
 */

/* ===============Esta ews una solicitud en ajax ================== */

btnConsultar.addEventListener('click', function () {
    var txtNombrePokemon = document.querySelector('#txtNombrePokemon');
    console.log(txtNombrePokemon.id);
    $.ajax({
        type: "get",
        url: "https://pokeapi.co/api/v2/pokemon/" + txtNombrePokemon.value,
        dataType: "json",
        success: function (response) {
            console.log(response);

            console.log("en el grafico");
/* window.onload = function () { */

    var chart = new CanvasJS.Chart("graficoUno", {
        theme: "light1", // "light2", "dark1", "dark2"
        animationEnabled: true, // change to true		
        title: {
            text: "Basic Column Chart"
        },
        data: [
            {
                // Change type to "bar", "area", "spline", "pie",etc.
                type: "column",
                dataPoints: [
                    { label: "hp", y: response.stats[0].base_stat },
                    { label: "attack", y: response.stats[1].base_stat },
                    { label: "defense", y: response.stats[2].base_stat },
                    { label: "special-attack", y: response.stats[3].base_stat },
                    { label: "special-defense", y: response.stats[4].base_stat },
                    { label: "speed", y: response.stats[5].base_stat }
                ]
            }
        ]
    });
    chart.render();

/* } */
console.log();
        }
    });
    txtNombrePokemon.value = '';
})
