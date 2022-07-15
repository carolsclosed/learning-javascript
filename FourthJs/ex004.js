var a = window.document.getElementById("area");
a.addEventListener("click", clicked);
a.addEventListener("mouseout", leave);
a.addEventListener("mouseenter", enter);
function clicked() {
  a.innerText = "Clicked!";
  a.style.background = "red";
}

function enter() {
  a.innerText = "Came in!";
  a.style.background = "grey";
}

function leave() {
  a.innerText = "Came out!";
  a.style.background = "green";
}
