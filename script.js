function convertTemperature() {
    var temperatureInput = parseFloat(document.getElementById("temperatureInput").value);
    var inputUnit = document.querySelector('input[name="inputUnit"]:checked').value;
    var outputUnit = document.querySelector('input[name="outputUnit"]:checked').value;
    var result = document.getElementById("result");

    if (isNaN(temperatureInput)) {
        result.innerHTML = "Please enter a valid number.";
        return;
    }

    var convertedTemperature;

    if (inputUnit === "celsius") {
        if (outputUnit === "celsius") {
            convertedTemperature = temperatureInput;
        } else if (outputUnit === "fahrenheit") {
            convertedTemperature = (temperatureInput * 9 / 5) + 32;
        } else if (outputUnit === "kelvin") {
            convertedTemperature = temperatureInput + 273.15;
        }
    } else if (inputUnit === "fahrenheit") {
        if (outputUnit === "celsius") {
            convertedTemperature = (temperatureInput - 32) * 5 / 9;
        } else if (outputUnit === "fahrenheit") {
            convertedTemperature = temperatureInput;
        } else if (outputUnit === "kelvin") {
            convertedTemperature = (temperatureInput - 32) * 5 / 9 + 273.15;
        }
    } else if (inputUnit === "kelvin") {
        if (outputUnit === "celsius") {
            convertedTemperature = temperatureInput - 273.15;
        } else if (outputUnit === "fahrenheit") {
            convertedTemperature = (temperatureInput - 273.15) * 9 / 5 + 32;
        } else if (outputUnit === "kelvin") {
            convertedTemperature = temperatureInput;
        }
    }

    result.innerHTML = "Converted temperature: " + convertedTemperature.toFixed(2) + " " + outputUnit.charAt(0).toUpperCase() + outputUnit.slice(1);
}
