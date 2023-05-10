function calculateRate() {
  const numAceitas = document.getElementById("num-aceitas").value;
  const numFeitas = document.getElementById("num-feitas").value;
  const rate = (numAceitas / numFeitas * 100).toFixed(2);
  document.getElementById("result").innerHTML = `Taxa de turnover: ${rate}%`;
}
