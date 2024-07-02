let users = {};
const player = document.getElementById("player");
let currentUser;
let usersCount;

if (localStorage.getItem('users')) {
  users = JSON.parse(localStorage.getItem('users'));
}

if (localStorage.getItem('usersCount')) {
  usersCount = JSON.parse(localStorage.getItem('usersCount'));
}

if (localStorage.getItem('currentUser')) {
    currentUser = JSON.parse(localStorage.getItem('currentUser'));
    player.innerHTML = currentUser;
}

// תפקיד הפונקציה הזו הוא להוסיף את הנתונים לטבלה
function buildTable() {
  // מציאת האלמנטים ב-HTML
  var tableBody = document.getElementById("table-body");
  var numPlayers = document.getElementById("num-players");
  // ניקוי הטבלה מהנתונים הקודמים
  tableBody.innerHTML = "";
  // כתיבת מספר השחקנים בדף
  numPlayers.textContent = usersCount;
  // הוספת הנתונים לטבלה
  for (var i = 0; i < usersCount; i++) {
    var row = document.createElement("tr");
    var nameCell = document.createElement("td");
    var scoreCell = document.createElement("td");
    // alert(users[i].innerHTML)
    // nameCell.textContent = users[i].nameCell;
    scoreCell.textContent = users[i][1];
    row.appendChild(nameCell);
    row.appendChild(scoreCell);
    tableBody.appendChild(row);
  }
}

// קריאה לפונקציה כדי לבנות את הטבלה כשהדף נטען
buildTable();