var pacientes = document.querySelectorAll('.paciente');

for(let contador = 0; contador < pacientes.length; contador++){
    var dadosPaciente = pacientes[contador];
    var peso = dadosPaciente.querySelector('.info-peso').textContent;
    var altura = dadosPaciente.querySelector('.info-altura').textContent;
    var imc = peso /(altura*altura);
    dadosPaciente.querySelector('.info-imc').textContent = imc.toFixed(2);
}