let a = document.getElementById("User");
let b = document.getElementById("Pass");
let c = document.getElementById("error");
function redi() {
    if (a.value == "vinu" && b.value == "vinu") {
        window.location.href = "Landing_page.html";
    }
    else if (a.value == "" && b.value == "") {
        c.innerText = "Please enter your credentials";
    }
    else {
        c.innerText = "Invalid credentials";
    }
}