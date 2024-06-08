const temperatureInput = document.getElementById('temperature');
const inputUnitSelect = document.getElementById('inputUnit');
const outputUnitSelect = document.getElementById('outputUnit');
const convertBtn = document.getElementById('convertBtn');
const resultDiv = document.getElementById('result');

convertBtn.addEventListener('click', convertTemperature);

function convertTemperature() {
    const temperature = parseFloat(temperatureInput.value);

    if (isNaN(temperature)) {
        resultDiv.textContent = 'Please enter a valid number.';
        return;
    }

    const inputUnit = inputUnitSelect.value;
    const outputUnit = outputUnitSelect.value;

    let convertedTemperature;

    if (inputUnit === 'celsius') {
        if (outputUnit === 'fahrenheit') {
            convertedTemperature = (temperature * 9/5) + 32;
        } else if (outputUnit === 'kelvin') {
            convertedTemperature = temperature + 273.15;
        } else {
            convertedTemperature = temperature;
        }
    } else if (inputUnit === 'fahrenheit') {
        if (outputUnit === 'celsius') {
            convertedTemperature = (temperature - 32) * 5/9;
        } else if (outputUnit === 'kelvin') {
            convertedTemperature = (temperature + 459.67) * 5/9;
        } else {
            convertedTemperature = temperature;
        }
    } else {
        if (outputUnit === 'celsius') {
            convertedTemperature = temperature - 273.15;
        } else if (outputUnit === 'fahrenheit') {
            convertedTemperature = (temperature * 9/5) - 459.67;
        } else {
            convertedTemperature = temperature;
        }
    }

    resultDiv.textContent = `${convertedTemperature.toFixed(2)} ${outputUnit.toUpperCase()}`;
}