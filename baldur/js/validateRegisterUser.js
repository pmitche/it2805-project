/**
 * Created by Paul on 20.11.2014.
 */

$(document).ready(function(){
    var $regexMail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var $regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    $("#inputEmail").on("keypress keydown keyup", function(){
        if (!$(this).val().match($regexMail)) {
            $("#mailHelpBlock").removeClass("hidden-when-valid");
            $("#inputEmail").css({"border-radius": "4px", "border-color": "red"});
            $("#mailHelpBlock").show();
        }
        else {
            $("#mailHelpBlock").addClass("hidden-when-valid");
            $("#inputEmail").css({"border-radius": "4px", "border-color": "green"});
        }
    });

    $("#inputPassword").on("keypress keydown keyup", function(){
        if (!$(this).val().match($regexPassword)) {
            $("#passwordHelpBlock").removeClass("hidden-when-valid");
            $("#inputPassword").css({"border-radius": "4px", "border-color": "red"});
            $("#passwordHelpBlock").show();
        }
        else {
            $("#passwordHelpBlock").addClass("hidden-when-valid");
            $("#inputPassword").css({"border-radius": "4px", "border-color": "green"});
        }
    });

    $("#inputRepeatPassword").on("keypress keydown keyup", function(){
        if ($(this).val() != $("#inputPassword").val()) {
            $("#passwordRepeatHelpBlock").removeClass("hidden-when-valid");
            $("#inputRepeatPassword").css({"border-radius": "4px", "border-color": "red"});
            $("#passwordRepeatHelpBlock").show();
        }
        else {
            $("#passwordRepeatHelpBlock").addClass("hidden-when-valid");
            $("#inputRepeatPassword").css({"border-radius": "4px", "border-color": "green"});
        }
    });
});
