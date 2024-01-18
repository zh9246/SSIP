function convertTemperature() {
    // Get user input
    let temperatureInput = document.getElementById("temperature").value;
    let unit = document.getElementById("unit").value;

    // Validate input
    if (!temperatureInput || isNaN(temperatureInput)) {
        alert("Please enter a valid temperature.");
        return;
    }

    // Convert temperature
    let convertedTemperature;
    let resultUnit;

    switch (unit) {
        case "celsius":
            convertedTemperature = (parseFloat(temperatureInput) - 32) * (5/9);
            resultUnit = "Celsius";
            break;
        case "fahrenheit":
            convertedTemperature = (parseFloat(temperatureInput) * (9/5)) + 32;
            resultUnit = "Fahrenheit";
            break;
        case "kelvin":
            convertedTemperature = parseFloat(temperatureInput) + 273.15;
            resultUnit = "Kelvin";
            break;
    }

    // Display result
    document.getElementById("result").innerText = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${resultUnit}`;
}
