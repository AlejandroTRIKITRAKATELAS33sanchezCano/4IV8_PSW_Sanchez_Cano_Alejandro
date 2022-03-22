
function calcular(){
    var Ta = parseInt(document.getElementById('Total_al').value);
    var H = parseInt(document.getElementById('Hombres').value);
    var M = parseInt(document.getElementById('Mujeres').value);

    var HT = (H*100)/Ta;
    var MT = (M*100)/Ta;

    var Por = "%";

    document.getElementById('PorH').innerHTML = HT + Por;
    document.getElementById('PorM').innerHTML = MT + Por;
}