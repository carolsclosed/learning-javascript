function verify() {
  var date = new Date();
  var year = date.getFullYear();
  var fyear = document.getElementById("txtyear");
  var res = document.getElementById("res");
  if (fyear.value.length == 0 || fyear.value > year) {
    alert("[ERROR] Please check your data and try again");
  } else {
    var fgender = document.getElementsByName("radgender");
    var age = year - Number(fyear.value);
    res.innerHTML = `Your have ${age} years old`;
  }
}
