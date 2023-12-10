var valorActual = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25'];
var valorPendiente = ['26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50'];
var valorTotal = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50'];

var valorBotones = document.querySelectorAll('#tabla button');
var arrayPulsado = [];
var correcto = valorTotal.slice();


function IntRand(max) {
    return Math.floor(Math.random() * max)
}

function reinicio() {
    arrayPulsado = [];
    correcto = valorTotal.slice();
    valorActual = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25'];
    valorPendiente = ['26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50'];
    valorTotal = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50']
    valorBotones.forEach(function(boton, index){
        var MainRand = IntRand(valorActual.length);
        boton.textContent = valorActual[MainRand];
        valorActual.splice(MainRand, 1);
    });
}

reinicio();


valorBotones.forEach(function(boton){
    boton.addEventListener('click', function(){
        
        var numeroMostrado = boton.textContent;
        if (arrayPulsado.length === 0 && numeroMostrado !== '1') {
            alert("Debes comenzar con el número 1");
            return;
        }
        
        arrayPulsado.push(numeroMostrado);

        var correctoVer = correcto.join('');
        var pulsadoVer = arrayPulsado.join('');

        if (pulsadoVer === correctoVer) {
            alert("¡Lo hiciste!");
            reinicio();
        } else if (!correctoVer.startsWith(pulsadoVer)) {
            alert("Fallaste, Reiniciando...");
            reinicio();
        } else {
            var RandNum = IntRand(valorPendiente.length);
            boton.textContent = valorPendiente[RandNum];
            valorPendiente.splice(RandNum, 1);
        }
    });
});