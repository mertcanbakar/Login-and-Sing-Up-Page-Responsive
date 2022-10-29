var loginSc = document.querySelector("#login");
var singUp = document.querySelector("#sing-up");
var btn = document.querySelector("#btn");


function login() {
    loginSc.style.left = "0px";
    singUp.style.left = "400px";
    btn.style.left = "0px";
}
function singIn() {
    loginSc.style.left = "-400px";
    singUp.style.left = "0px";
    btn.style.left = "110px";
}
