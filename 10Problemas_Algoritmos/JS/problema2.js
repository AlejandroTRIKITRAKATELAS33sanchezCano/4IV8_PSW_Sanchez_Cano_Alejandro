function reiniciar(){
    document.getElementById('initCapital').reset();
}

function calcular(){
    var x = parseInt(document.getElementById('initCapital').value);
    var y = 0.30;

    document.getElementById('resultado').innerHTML = (x*y)+x;
}