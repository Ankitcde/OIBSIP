const tempInput = document.getElementById("tempInput");
const unitSelect = document.getElementById("unitSelect");
const convertBtn = document.getElementById("convertBtn");
const errorMsg = document.getElementById("errorMsg");
const outC = document.getElementById("outC");
const outF = document.getElementById("outF");
const outK = document.getElementById("outK");

convertBtn.addEventListener("click", () => {
  errorMsg.textContent = "";
  const raw = tempInput.value.trim();

  if (raw === "" || Number.isNaN(Number(raw))) {
    errorMsg.textContent = "Please enter a valid numeric temperature.";
    return;
  }

  const val = parseFloat(raw);
  const unit = unitSelect.value;
  let celsius;

  if (unit === "C") celsius = val;
  else if (unit === "F") celsius = (val - 32) * (5 / 9);
  else celsius = val - 273.15;

  if (celsius < -273.15) {
    errorMsg.textContent = "Temperature cannot be below absolute zero (-273.15°C / 0 K).";
    return;
  }

  const fahrenheit = celsius * (9 / 5) + 32;
  const kelvin = celsius + 273.15;

  outC.textContent = `Celsius: ${celsius.toFixed(2)} °C`;
  outF.textContent = `Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
  outK.textContent = `Kelvin: ${kelvin.toFixed(2)} K`;
});