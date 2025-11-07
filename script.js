document.getElementById("start-btn").addEventListener("click", () => {
  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("calc-screen").classList.remove("hidden");
});

document.getElementById("calc-btn").addEventListener("click", () => {
  const Power_Load = parseFloat(document.getElementById("powerLoad").value);
  const System_FreqAC = parseFloat(document.getElementById("freqAC").value);
  const Vac = parseFloat(document.getElementById("vac").value);
  const Ma = parseFloat(document.getElementById("ma").value);

  const Vmpp = 50.6;
  const Pmpp = 0.3;

  const Vidc = (1 / Ma) * Math.sqrt(2) * Vac;
  const NM = Math.round(Vidc / Vmpp);
  const SV = NM * Vmpp;
  const SP = NM * Pmpp;
  const NS = Math.round(Power_Load / SP);
  const AP = NS * SP;

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
    🌞 <b>Results:</b><br>
    Input DC Voltage (Vidc): ${Vidc.toFixed(2)} V<br>
    Number of Modules (NM): ${NM}<br>
    String Voltage (SV): ${SV.toFixed(2)} V<br>
    String Power (SP): ${SP.toFixed(2)} kW<br>
    Number of Strings (NS): ${NS}<br>
    Array Power (AP): ${AP.toFixed(2)} kW
  `;
  resultDiv.classList.remove("hidden");
});
