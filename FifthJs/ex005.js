function add() {
  var tn1 = document.getElementById("txtn1");
  var tn2 = document.querySelector("input#txtn2");
  var res = document.getElementById("res");
  console.log(res);
  var n1 = Number(tn1.value);
  var n2 = Number(tn2.value);
  var s = n1 + n2;
  res.innerHTML = `The sum between ${n1} and ${n2} is <strong>${s}</strong>`;
}
