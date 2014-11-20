function setMenuLogin() {
    $( "#menuLogin").empty();
    $( "#menuLogin" ).append("<a class=\"dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\" id=\"navLogin\"><span class=\"glyphicon glyphicon-lock\"></span>&nbsp;&nbsp;Login</a>" +
        "<div class=\"dropdown-menu\" style=\"padding:17px;\">" +
        "<form class=\"bs-component\" id=\"formLogin\">" +
        "<div class=\"form-group\">" +
        "<input name=\"username\" id=\"username\" type=\"text\" placeholder=\"Username\"></div>" +
        "<div class=\"form-group\">" +
        "<input name=\"password\" id=\"password\" type=\"password\" placeholder=\"Password\"><br></div>" +
        "<div class=\"btn-group btn-block\"><button type=\"button\" id=\"loginButton\" class=\"btn-default btn-login\">Login</button>" +
        "<button type=\"button\" id=\"register\" class=\"btn-default btn-login\">Register</button></div>" +
        "</form></div>");
    document.getElementById("loginButton").addEventListener("click", loginFunc);
    document.getElementById("register").addEventListener("click", register);
}
function setMenuLoggedIn(){
    $( "#menuLogin").empty();
    $( "#menuLogin" ).append("<a class=\"dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\" id=\"navLogin\"><span class=\"glyphicon glyphicon-user\"></span>&nbsp;&nbsp;</a>" +
        "<ul class=\"dropdown-menu\" aria-labelledby=\"userMenu\">" +
        "<li><a href='#' onclick=\"logout();return false;\">Log out</a></li>" +
        "<li><a href=\"profile.html\">Profile settings</a></li></ul>");
}
function logout() {
    $.removeCookie('baldurLogin', { path: '/' });
    setMenu();
}
function setMenu() {
    if (typeof $.cookie('baldurLogin') === 'undefined'){
        setMenuLogin();
    }else{
        setMenuLoggedIn();
    }
}
window.onload=function(){
    setMenu();
};

function loginFunc(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(userExists()){
        $.cookie('baldurLogin', username, { expires: 1, path: '/' });
        setMenu();
    }
}
function register(){
    window.location = "register.html";
}

//TODO: Change user exists
function userExists() {
    return true;
}