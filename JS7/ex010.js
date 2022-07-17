var now = new Date();
var hour = now.getHours();
console.log(`Now it's exactly ${hour}`);
if (hour < 12) {
  console.log("Good Morning!");
} else if (hour <= 18) {
  console.log("Good Afternoon!");
} else {
  console.log("Good Night!");
}
