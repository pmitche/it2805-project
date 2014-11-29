window.onload=function(){
    setMenu();
    if(isLoggedIn()){
        $( "#dynSiteMap").empty();
        $( "#dynSiteMap" ).append('<li><a href="../profile/profile.html">Profil</li>');
    }
};