
function calcular(){
    var Aa = parseInt(document.getElementById('Año_actual').value);
    var An = parseInt(document.getElementById('Año_nacer').value);


    document.getElementById('resultado').innerHTML = Aa-An;
}