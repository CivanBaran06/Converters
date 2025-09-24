// Sabit kur (örnek)
const rates = { USD: 41.46, EUR: 48.70, GBP: 55.77 };

function convertCurrency() {
  const value = parseFloat(document.getElementById("currencyInput").value);
  const unit = document.getElementById("currencySelect").value;
  if (isNaN(value)) {
    document.getElementById("currencyResult").textContent = "Geçerli sayı girin.";
    return;
  }
  const result = (value * rates[unit]).toFixed(2);
  document.getElementById("currencyResult").textContent = `${value} ${unit} = ${result} TL`;
}

function convertTemperature() {
  const value = parseFloat(document.getElementById("tempInput").value);
  const unit = document.getElementById("tempSelect").value;
  if (isNaN(value)) {
    document.getElementById("tempResult").textContent = "";
    return;
  }
  let result;
  if (unit === "CtoF") {
    result = (value * 9/5 + 32).toFixed(2) + "°F";
    document.getElementById("tempResult").textContent = `${value}°C = ${result}`;
  } else {
    result = ((value - 32) * 5/9).toFixed(2) + "°C";
    document.getElementById("tempResult").textContent = `${value}°F = ${result}`;
  }
}

function convertLength() {
  const value = parseFloat(document.getElementById("lengthInput").value);
  const unit = document.getElementById("lengthSelect").value;
  if (isNaN(value)) {
    document.getElementById("lengthResult").textContent = "";
    return;
  }
  let result;
  switch(unit) {
    case "mToKm": result = (value / 1000).toFixed(3) + " km"; break;
    case "kmToM": result = (value * 1000).toFixed(2) + " m"; break;
    case "cmToM": result = (value / 100).toFixed(2) + " m"; break;
    case "mToCm": result = (value * 100).toFixed(2) + " cm"; break;
  }
  document.getElementById("lengthResult").textContent = `${value} → ${result}`;
}

/* Sekme değişimini güvenli şekilde yakala (Bootstrap'in shown.bs.tab eventi) */
document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll('#converterTabs button[data-bs-toggle="tab"]');

  // Başlangıç: currency teması (aynı zamanda CSS de bunu default yapıyor)
  document.body.classList.remove('temp-active','length-active');
  document.body.classList.add('currency-active');

  tabButtons.forEach(btn => {
    btn.addEventListener('shown.bs.tab', (e) => {
      const id = e.target.id;
      // önce tüm özel sınıfları kaldır
      document.body.classList.remove('currency-active','temp-active','length-active');

      if (id === 'currency-tab') document.body.classList.add('currency-active');
      else if (id === 'temperature-tab') document.body.classList.add('temp-active');
      else if (id === 'length-tab') document.body.classList.add('length-active');
    });
  });
});
