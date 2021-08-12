function convert(event) {
    event.preventDefault();
    var tempValue = document.getElementById("tempValue").value;
    var inputValue = document.getElementById("scaleInput").value;
    var outputValue = document.getElementById("scaleOutput").value;
    var result = tempValue;

    if (inputValue == "Kelvin" && outputValue == "Celsius") {
        result = (273 - tempValue) + "°C"; 
    }

    document.getElementById("tempResult").value = result;
}