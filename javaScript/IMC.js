var showing = document.getElementById("imc-id").style.display = "none";

document.getElementById('btt-calculo').addEventListener('click', function () {
    const peso = document.getElementById("display-peso").value;
    const altura = document.getElementById("display-altura").value;


    const valorPeso = parseFloat(peso);
    const valorAltura = parseFloat(altura);

    if (isNaN(peso) || peso !== "" || isNaN(altura) || altura !== "") {
        showing = document.getElementById("imc-id").style.display = "block";

    } else {
        alert("Não preencheu algum campo")
    }
    
    calcularIMC(valorPeso, valorAltura);
});


function calcularIMC(peso, altura) {
    let result = peso / (altura * altura);

    if (result < 18.5) {
        document.getElementById('display').value = `Valor do IMC: ${result.toFixed(2)}`
        console.log("Ídice de Massa Corporal: abaixo peso")

    } else {
        if (result > 18.5 && result < 24.9) {
            document.getElementById('display').value = `Valor do IMC: ${result.toFixed(2)}`
            console.log("Ídice de Massa Corporal: Eutrofia (peso adequado)")
        }

        if (result >= 25 && result < 29.9) {
            document.getElementById('display').value = `Valor do IMC: ${result.toFixed(2)}`
            console.log("Ídice de Massa Corporal: Sobrepeso")
        }

        if (result > 30 && result < 34.9) {
            document.getElementById('display').value = `Valor do IMC: ${result.toFixed(2)}`
            console.log("Ídice de Massa Corporal: Obesidade - grau 1")
        }

        if (result > 35 && result < 39.9) {
            document.getElementById('display').value = `Valor do IMC: ${result.toFixed(2)}`
            console.log("Ídice de Massa Corporal: Obesidade - grau 2")
        }

        if (result > 40) {
            document.getElementById('display').value = `Valor do IMC: ${result.toFixed(2)}`
            console.log("Ídice de Massa Corporal: Obesidade - grau (Obesidade Mórbida)")
        }
    }
}

