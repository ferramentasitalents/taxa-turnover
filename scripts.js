function calculate() {
  const hires = parseInt(document.getElementById("hires").value);
  const terminations = parseInt(document.getElementById("terminations").value);

  if (isNaN(hires) || isNaN(terminations)) {
    document.getElementById("result").innerHTML = "Por favor, insira números válidos.";
    return;
  }

  const turnover = ((terminations / hires) * 100).toFixed(2);
  document.getElementById("result").innerHTML = `Taxa de turnover: ${turnover}%`;
}
