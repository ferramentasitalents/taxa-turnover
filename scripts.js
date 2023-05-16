function calculateTurnoverRate() {
  const numContratados = parseFloat(document.getElementById("num-contratados").value);
  const numDesligamentos = parseFloat(document.getElementById("num-desligamentos").value);
  const turnoverRate = (numDesligamentos / numContratados) * 100;
  document.getElementById("result").innerHTML = `Taxa de Turnover: ${turnoverRate.toFixed(2)}%`;
}
