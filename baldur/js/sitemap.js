window.onload=function(){
    setMenu();
    if(isLoggedIn()){
        $( "#dynSiteMap").empty();
        $( "#dynSiteMap" ).append('<li><a href="../profile/profile.html">Profil</li>');

        $( "#upcomming").empty();
        $( "#upcomming" ).append('<ul>' +
            '<li><a href="../events/tennis.html">Norgesmesterskap i Tennis</a></li>' +
            '<li><a href="../events/squash.html">Squash shoot-out</a></li>' +
            '<li><a href="../events/anatomi.html">Eksamensforelesning i anatomi</a></li>' +
            '<li><a href="../events/ekskursjon.html">Ekskursjon til OL i Pyongyang 2016</a></li></ul>');
    }
};