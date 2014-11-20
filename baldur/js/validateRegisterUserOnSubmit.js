/**
 * Created by Paul on 20.11.2014.
 */

function validateForm() {
    console.log("hhahahah");
    var mail = document.getElementById("inputEmail").value,
        password = document.getElementById("inputPassword").value,
        password2 = document.getElementById("inputRepeatPassword").value,
        firstname = document.getElementById("inputFirstName").value,
        lastname = document.getElementById("inputLastName").value,
        allergies = document.getElementById("inputAllergies").value,
        favoriteSport = document.getElementById("selectSport"),
        gender = document.querySelector('input[name=genderRadios]:checked').value,
        selectedSport = favoriteSport.options[favoriteSport.selectedIndex].text;

    if (existsEmptyRequiredFields(mail, password, password2)) {
        alert("Noen obligatoriske fag er ikke fylt inn.");
        return false;
    }
    else if (!validateEmail(mail)){
        alert("Emailen må være på formatet ola@nordmann.no");
        return false;
    } else if (!validatePassword(password)){
        alert("Passordet er på feil format. Må inneholde følgende: \n" +
        "Minst én stor bokstav \n" +
        "Minst én liten bokstav \n" +
        "Minst ett tall \n" +
        "Minst ett spesialtegn \n" +
        "Minst lengde på 8 karakterer.");
        return false;
    } else if (!isPasswordsEqual(password, password2)) {
        alert("Passordene er ikke like");
        return false;
    }
    return true;
}

function existsEmptyRequiredFields(mail, password, password2) {
    if ((mail == null || mail == "") || (password == null || password == "") || (password2 == null || password2 == "")) {
        return true;
    }
    return false;
}

function validateEmail(email) {
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}

function validatePassword(password) {
    var regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    return regex.test(password);
}

function isPasswordsEqual(password1, password2) {
    if (password1 != password2) {
        return false;
    }
    return true;
}