function convert(event) {
    event.preventDefault();
    var tempValue = document.getElementById("tempValue").value;
    var inputValue = document.getElementById("scaleInput").value;
    var outputValue = document.getElementById("scaleOutput").value;
    var result = tempValue;

    if (inputValue == "Kelvin" && outputValue == "Kelvin" || inputValue == "Celsius" && outputValue == "Celsius" || inputValue == "Fahrenheit" && outputValue == "Fahrenheit") {
        result = tempValue + "K"
        document.getElementById('scaleInput').style.border = '2px solid #FF0000';
        document.getElementById('scaleOutput').style.border = '2px solid #FF0000';
        let correction = document.getElementById('correction');
        correction.innerHTML = `<p><strong>Mude as escalas para obter resultado diferente!</strong></p>`;
    }
    else if (inputValue == "Kelvin" && outputValue == "Celsius") {
        result = (273 - tempValue) + "°C"; 
    }
    else if (inputValue == "Kelvin" && outputValue == "Fahrenheit") {
        result = (tempValue - 273) * 1.8 + 32 + "°F";
    }
    else if (inputValue == "Celsius" && outputValue == "Kelvin") {
        result = (tempValue + 273) + "K";
    }
    else if (inputValue == "Celsius" && outputValue == "Fahrenheit") {
        result = tempValue * 1.8 + 32 + "°F";
    }
    else if (inputValue == "Fahrenheit" && outputValue == "Kelvin") {
        result = (tempValue - 32) * (5/9) + 273 + "K";
    }
    else if (inputValue == "Fahrenheit" && outputValue == "Celsius") {
        result = (tempValue - 32) / 1.8 + "°C"
    }
    

    document.getElementById("tempResult").value = result;
}