const celciusInput = document.querySelector("#celcius input");
const fahrenheitInput = document.querySelector("#fahrenheit input");
const kelvinInput = document.querySelector("#kelvin input");

function roundNum(num) {
	return Math.round(num * 100)/ 100;  // To round the number to 2 decimals
}

function celciusToFK() {
	const cTemp = parseFloat(celciusInput.value); // Makes sure to convert the value from a string to a floating number
	const fTemp = (cTemp * (9/5)) + 32;
	const kTemp = cTemp + 273.15;

	fahrenheitInput.value = roundNum(fTemp);
	kelvinInput.value = roundNum(kTemp);
	fahrenheitInput.innerHTML = fTemp;
	kelvinInput.innerHTML = kTemp;
}

function fahrenheitToCK() {
	const fTemp = parseFloat(fahrenheitInput.value); // Makes sure to convert the value from a string to a floating number
	const cTemp = (fTemp - 32) * (5/9);
	const kTemp = ((fTemp - 32) * (5/9)) + 273.15;

	celciusInput.value = roundNum(cTemp);
	kelvinInput.value = roundNum(kTemp);
	celciusInput.innerHTML = cTemp;
	kelvinInput.innerHTML = kTemp;
}

function kelvinToCF() {
	const kTemp = parseFloat(kelvinInput.value); // Makes sure to convert the value from a string to a floating number
	const cTemp = kTemp - 273.15;
	const fTemp = ((kTemp - 273.15) * (9/5)) + 32;

	celciusInput.value = roundNum(cTemp);
	fahrenheitInput.value = roundNum(fTemp);
	celciusInput.innerHTML = cTemp;
	fahrenheitInput.innerHTML = fTemp;
}

// Adding event listeners to get the values

function main(){
	celciusInput.addEventListener('input', celciusToFK);
	fahrenheitInput.addEventListener('input', fahrenheitToCK);
	kelvinInput.addEventListener('input', kelvinToCF);
}

main();


