function reiniciar(){
    document.getElementById('initCapital').reset();
}

function calcular(){
    var x = parseInt(document.getElementById('initCapital').value);
    var y = 0.02;

    document.getElementById('resultado').innerHTML = (x*y)+x
}