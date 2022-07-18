function charge() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("img");
  var date = new Date();
  var hr = date.getHours();
  msg.innerHTML = `It's exactly ${hr} hours.`;
  if (hr >= 0 && hr < 12) {
    img.src = "imgs/morning.png";
    document.body.style.background = "#FFA07A";
  } else if (hr >= 12 && hr < 18) {
    img.src = "imgs/afternoon.png";
    document.body.style.background = "#BA55D3";
  } else {
    img.src = "imgs/night.png";
    document.body.style.background = "#191970";
  }
}
