function convert(event) {
    event.preventDefault();
    var tempValue = document.getElementById("tempValue").value;
    var inputValue = document.getElementById("scaleInput").value;
    var outputValue = document.getElementById("scaleOutput").value;
    var result = tempValue;
    let correction = document.getElementById('correction');

    if (inputValue == "Kelvin" && outputValue == "Kelvin" || inputValue == "Celsius" && outputValue == "Celsius" || inputValue == "Fahrenheit" && outputValue == "Fahrenheit") {
        result = tempValue;
        document.getElementById('scaleInput').style.border = '2px solid #FF0000';
        document.getElementById('scaleOutput').style.border = '2px solid #FF0000';
        correction.innerHTML = `<p><strong>Mude as escalas para obter resultado diferente!</strong></p>`;
    }
    else if (inputValue == "Kelvin" && outputValue == "Celsius") {
        result = ((273 - tempValue)).toFixed(2) + "°C";
        document.getElementById('scaleInput').style.border = "1px solid #000";
        document.getElementById('scaleOutput').style.border = "1px solid #000";
        correction.innerHTML = ``;
    }
    else if (inputValue == "Kelvin" && outputValue == "Fahrenheit") {
        result = ((tempValue - 273) * 1.8 + 32).toFixed(2) + "°F";
        document.getElementById('scaleInput').style.border = "1px solid #000";
        document.getElementById('scaleOutput').style.border = "1px solid #000";
        correction.innerHTML = ``;
    }
    else if (inputValue == "Celsius" && outputValue == "Kelvin") {
        result = ((parseFloat(tempValue) + parseInt(273))).toFixed(2) + "K";
        document.getElementById('scaleInput').style.border = "1px solid #000";
        document.getElementById('scaleOutput').style.border = "1px solid #000";
        correction.innerHTML = ``;
    }
    else if (inputValue == "Celsius" && outputValue == "Fahrenheit") {
        result = (tempValue * 1.8 + 32).toFixed(2) + "°F";
        document.getElementById('scaleInput').style.border = "1px solid #000";
        document.getElementById('scaleOutput').style.border = "1px solid #000";
        correction.innerHTML = ``;
    }
    else if (inputValue == "Fahrenheit" && outputValue == "Kelvin") {
        result = ((tempValue - 32) * (5 / 9) + 273).toFixed(2) + "K";
        document.getElementById('scaleInput').style.border = "1px solid #000";
        document.getElementById('scaleOutput').style.border = "1px solid #000";
        correction.innerHTML = ``;
    }
    else if (inputValue == "Fahrenheit" && outputValue == "Celsius") {
        result = ((tempValue - 32) / 1.8).toFixed(2) + "°C"
        document.getElementById('scaleInput').style.border = "1px solid #000";
        document.getElementById('scaleOutput').style.border = "1px solid #000";
        correction.innerHTML = ``;
    }


    document.getElementById("tempResult").value = result;
}