function verify() {
  var date = new Date();
  var year = date.getFullYear();
  var fyear = document.getElementById("txtyear");
  var res = document.getElementById("res");
  if (fyear.value.length == 0 || Number(fyear.value) > year) {
    alert("[ERROR] Please check your data and try again");
  } else {
    var fgender = document.getElementsByName("radgender");
    var age = year - Number(fyear.value);
    var img = document.createElement("img");
    img.setAttribute("id", "photo");
    if (fgender[0].checked) {
      gender = "Man";
      if (age >= 0 && age < 10) {
        //criança
        img.setAttribute("src", "imgs/bebegaroto.jpg");
      } else if (age >= 10 && age < 21) {
        //Jovem
        img.setAttribute("src", "imgs/jovemgaroto.jpg");
      } else if (age >= 21 && age < 50) {
        //adulto
        img.setAttribute("src", "imgs/adultohomem.jpg");
      } else if (age >= 50) {
        //idoso
        img.setAttribute("src", "imgs/idosohomem.jpg");
      }
    } else if (fgender[1].checked) {
      gender = "Woman";
      if (age >= 0 && age < 10) {
        //criança
        img.setAttribute("src", "imgs/bebegarota.jpg");
      } else if (age >= 10 && age < 21) {
        //Jovem
        img.setAttribute("src", "imgs/jovemgarota.jpg");
      } else if (age >= 21 && age < 50) {
        //adulto
        img.setAttribute("src", "imgs/adultamulher.jpg");
      } else if (age >= 50) {
        //idoso
        img.setAttribute("src", "imgs/idosamulher.jpg");
      }
    }
  }

  res.style.textAlign = "center";
  res.innerHTML = `${gender} of ${age} years old`;
  res.appendChild(img);
  img.style.width = "250px";
  img.style.height = "240px";
  img.style.borderRadius = "50%";
}
