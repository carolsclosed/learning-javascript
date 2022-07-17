var now = new Date();
var dayweek = now.getDay();
function tellmedweek() {
  alert(dayweek);
  switch (dayweek) {
    case 0:
      alert("Sunday");
      break;
    case 1:
      alert("Monday");
      break;
    case 2:
      alert("Tuesday");
      break;
    case 3:
      alert("Wednesday");
      break;
    case 4:
      alert("Thursday");
      break;
    case 5:
      alert("Friday");
      break;
    case 6:
      alert("Saturday");
      break;

    default:
      alert("[ERROR] Invalid Day");
      break;
  }
}
/* 
0-sunday
1-monday
2-tuesday
3-wednesday
4-thursday
5-friday
6-saturday
*/
