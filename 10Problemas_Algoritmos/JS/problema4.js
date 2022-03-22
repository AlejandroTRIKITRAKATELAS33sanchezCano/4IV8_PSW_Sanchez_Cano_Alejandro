
function calcular(){
    var pr1 = parseInt(document.getElementById('p1').value);
    var pr2 = parseInt(document.getElementById('p2').value);
    var pr3 = parseInt(document.getElementById('p3').value);
    var ExF = parseInt(document.getElementById('ExamenF').value);
    var Trf = parseInt(document.getElementById('Trabajo_final').value);

    var pf = (pr1+pr2+pr3)/3;
    var ci = pf*0.55;

    var tr = ExF*0.30
    
    var qu = Trf*0.15

    document.getElementById('PromedioF').innerHTML = ci+tr+qu;
}