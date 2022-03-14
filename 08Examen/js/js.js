function reiniciar(){
    document.getElementById('valor').reset();
    document.getElementById('cuota').reset();
    document.getElementById('periodo').reset();
}

function calcular(){
    var p = document.getElementById('valor').value;
    var n = document.getElementById('periodo').value;
    var a = 0.0394;

    var t = p*(a+1)*n;
    var f = t/p;
    document.getElementById('Interes').innerHTML = t;
    document.getElementById('Fijo').innerHTML = f;


}