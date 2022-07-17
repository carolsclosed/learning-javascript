function calculater() {
  var txtv = window.document.getElementById("txtvel");
  var res = window.document.getElementById("res");
  var vel = Number(txtv.value);
  res.innerHTML = ` <p> Your current velocity is <strong>${vel}Km/h</strong>.</p>`;
  if (vel > 60) {
    res.innerHTML += `<p> You are  <strong>fined</strong> for speeding. </p>`;
  }
  res.innerHTML += `<p> Always drive with seat belt! </p>`;
}
