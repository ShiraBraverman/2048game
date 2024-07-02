
let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");
let loginBtn = document.getElementById("clkbtnLogin");
let signupBtn = document.getElementById("clkbtnSignup");
const loginUserName = document.getElementById("loginUserName");
const signupUserName = document.getElementById("signupUserName");
const loginPassword = document.getElementById("loginPassword");
const signupPassword = document.getElementById("signupPassword");
const signupConfirmPassword = document.getElementById("signupConfirmPassword");

signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});

loginBtn.addEventListener("click", newlogin);

signupBtn.addEventListener("click", newsignup);

// הגדרת משתנים לשמירת מידע של משתמשים
let users = {};
let usersCount = 0;

function newlogin() {
    if (!users[loginUserName.value]) {
        alert('User not exists');
        slider.classList.add("moveslider");
        formSection.classList.add("form-section-move");
        signupUserName.value = loginUserName.value;
        loginUserName.value = "";
        loginPassword.value = "";
        return;
    }

    if (loginPassword.value !== users[loginUserName.value].password) {
        alert('incorect password');
        loginPassword.value = "";
        return;
    }

    let currentUser = loginUserName.value;

    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    window.location.replace('../HTML/game.html');
}

function newsignup() {
    // בדיקה אם המשתמש כבר קיים
    if (users[signupUserName.value]) {
        alert('User already exists');
        slider.classList.remove("moveslider");
        formSection.classList.remove("form-section-move");
        loginUserName.value = signupUserName.value;
        signupUserName.value = "";
        signupPassword.value = "";
        signupConfirmPassword.value = "";
        return;
    }

    if (signupPassword.value !== signupConfirmPassword.value) {
        alert('incorect password');
        signupPassword.value = "";
        signupConfirmPassword.value = "";
        return;
    }

    // הוספת המשתמש החדש למערך
    users[signupUserName.value] = {
        password: signupPassword.value,
        points: 0
    };

    // עדכון מספר המשתמשים
    usersCount++;

    // שמירת המשתמשים ב- localStorage
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('usersCount', usersCount);
    let currentUser = signupUserName.value;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    localStorage.setItem('usersCount', JSON.stringify(usersCount));
    window.location.replace('../HTML/game.html');
}

// קריאת המשתמשים מ- localStorage
if (localStorage.getItem('users')) {
    users = JSON.parse(localStorage.getItem('users'));
}

if (localStorage.getItem('usersCount')) {
    usersCount = parseInt(localStorage.getItem('usersCount'));
}