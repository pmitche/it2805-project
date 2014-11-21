$(document).ready(function(){
    var oldEmail = $.cookie('baldurLogin');

    $("#updateUser").click(function(e){
        e.preventDefault();
        if(validateForm()){
            var data = localStorage['baldur-users'];
            var users;
            if (typeof data === 'undefined'){
                users = [];
            }else{
                users = JSON.parse(data);
            }
            for (var i in users) {
                var user = users[i];
                if(user.email === oldEmail){
                    users.splice(i, 1);
                    i--;
                }
            }
            submitForm(users, oldEmail);
        }
    });

    var data = localStorage['baldur-users'];
    var users;
    if (typeof data === 'undefined'){
        window.location.href = "index.html";
    }else{
        users = JSON.parse(data);
    }
    if( !isLoggedIn()){
        window.location.href = "index.html";
    }
    var c = $.cookie('baldurLogin')
    for (var i in users) {
        var user = users[i];
        if(user.email === c){
            document.getElementById("inputEmail").value = user.email;
            document.getElementById("inputPassword").value = user.password;
            document.getElementById("inputRepeatPassword").value = user.password;
            document.getElementById("inputFirstName").value = user.firstName;
            document.getElementById("inputLastName").value = user.lastName;
            document.getElementById("inputAllergies").value = user.allergies;
            var favoriteSport = document.getElementById("selectSport");
            document.querySelector('input[name=genderRadios]:checked').value = user.gender;
            favoriteSport.options[favoriteSport.selectedIndex].text = user.selectedSport;
        }
    }
});

function submitForm(users, oldEmail){
    var mail = document.getElementById("inputEmail").value,
        password = document.getElementById("inputPassword").value,
        password2 = document.getElementById("inputRepeatPassword").value,
        firstname = document.getElementById("inputFirstName").value,
        lastname = document.getElementById("inputLastName").value,
        allergies = document.getElementById("inputAllergies").value,
        favoriteSport = document.getElementById("selectSport"),
        gender = document.querySelector('input[name=genderRadios]:checked').value,
        selectedSport = favoriteSport.options[favoriteSport.selectedIndex].text;

    var user = {email:mail , password:password , firstName:firstname, lastName:lastname, allergies:allergies, gender:gender, selectedSport:selectedSport };
    users.push(user);
    localStorage['baldur-users'] = JSON.stringify(users);
    if(oldEmail != mail){
        $.cookie('baldurLogin', mail, { expires: 1, path: '/' });
    }
    window.location.href = "index.html";
}