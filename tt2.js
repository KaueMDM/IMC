function calcular ( ){
    var nome = window.document.getElementById('tx').value
    var alt = window.document.getElementById('n0').value/100
    var pes = window.document.getElementById('n1').value
    var res = window.document.getElementById('res')
    var imc = pes / (alt)**2;
    window.alert(`${nome} seu imc é ${imc}`)
if (imc <= 18 ) {
    res.innerHTML="Muito magro! TEM COMIDA EM CASA NÃO?"
} else if (imc <= 24.9) {
    res.innerHTML="Normal!"
} else if (imc <= 29.9) {
    res.innerHTML="Sobrepreso! TÁ GORDINHO(A) EM?"
} else if (imc <= 34.9) {
    res.innerHTML="Obesidade grau I! TÁ NA ÉPOCA DA MANGA É?"
} else if (imc <= 39.9) {
    res.innerHTML="Obesidade grau II!! OH SILOS MALAFAIO... BORA FAZER UNS EXERCICIOS PAI? "
} else {
    res.innerHTML="Obesidade grau III!!! OH THAIS CARLA, TEM SOLUÇÃO PRA VOCÊ NÃO EM!"
}
} 