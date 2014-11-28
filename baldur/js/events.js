$(document).ready(function(){
    if(isLoggedIn()){
        var functionToRun;
        if (window.location.pathname == "/it2805-project/baldur/events/events.html"){
            functionToRun = parse;
        } else if (window.location.pathname == "/it2805-project/baldur/events/tennis.html"){
            functionToRun = parseTennis;
        } else if (window.location.pathname == "/it2805-project/baldur/events/squash.html"){
            functionToRun = parseSquash;
        } else if (window.location.pathname == "/it2805-project/baldur/events/anatomi.html"){
            functionToRun = parseAnatomi;
        } else if (window.location.pathname == "/it2805-project/baldur/events/ekskursjon.html"){
            functionToRun = parseEkskursjon;
        }

        $.ajax({
            url: 'xml/events.xml',
            dataType: "xml",
            success: functionToRun,
            error: function(){alert("Error: Something went wrong");}
        });
    }else{
        $(".main-content").empty();
        $(".main-content").append("<h2>Du er ikke logget inn. Logg inn for å se arrangementer.</h2>");
    }
});

function parse(document){
    var counter = 0;
    var output = "";
    $(document).find("event").each(function(){
        var newRow = "";
        var endRow = "";
        if(counter === 0){
            newRow = "<div class='row'>";
        }
        if(counter >= 1){
            counter = -1;
            endRow = "</div>";
        }
        output += newRow+'<div class="col-lg-6 col-sm-6"><h3><i>' +$(this).find('eventName').text()+"</i></h3>"+
            '<a class=\'event-thumbnail\' href="' + $(this).find('linkUrl').text() + '">' +
            '<img src="' + $(this).find('imageUrl').text() + '"/></a>' +
            '</br><i>'+$(this).find('ingress').text()+ '</i></p><br>' +
            '</div>'+endRow;
        counter++;
    });
    $("#eventsList").append(output);
}

function parseTennis(document, page){
    var child = $(document).find('event[name="tennis"]');
    $(".timefrom").html(child.find("from").find("date").text() + " kl. " + child.find("from").find("time").text());
    $(".timeto").html(child.find("to").find("date").text() + " kl. " + child.find("to").find("time").text());
    $(".location").html(child.find("location").text());
    $(".image").html("<img src='" + child.find("imageUrl").text() + "' width='250' height='250' style='border-radius: 125px; box-shadow; box-shadow: 0 0 8px rgba(0, 0, 0, .8);'/>");
    $(".ingress").html("<b>" + child.find("ingress").text() + "</b>");
    $(".description").html(child.find("description").text());
}

function parseSquash(document){
    var child = $(document).find('event[name="squash"]');
    $(".timefrom").html(child.find("from").find("date").text() + " kl. " + child.find("from").find("time").text());
    $(".timeto").html(child.find("to").find("date").text() + " kl. " + child.find("to").find("time").text());
    $(".location").html(child.find("location").text());
    $(".image").html("<img src='" + child.find("imageUrl").text() + "' width='250' height='250' style='border-radius: 125px; box-shadow: 0 0 8px rgba(0, 0, 0, .8);'/>");
    $(".ingress").html("<b>" + child.find("ingress").text() + "</b>");
    $(".description").html(child.find("description").text());
}

function parseAnatomi(document){
    var child = $(document).find('event[name="anatomi"]');
    $(".timefrom").html(child.find("from").find("date").text() + " kl. " + child.find("from").find("time").text());
    $(".timeto").html(child.find("to").find("date").text() + " kl. " + child.find("to").find("time").text());
    $(".location").html(child.find("location").text());
    $(".image").html("<img src='" + child.find("imageUrl").text() + "' width='250' height='250' style='border-radius: 125px; box-shadow: 0 0 8px rgba(0, 0, 0, .8);' />");
    $(".ingress").html("<b>" + child.find("ingress").text() + "</b>");
    $(".description").html(child.find("description").text());
}

function parseEkskursjon(document){
    var child = $(document).find('event[name="ekskursjon"]');
    $(".timefrom").html(child.find("from").find("date").text() + " kl. " + child.find("from").find("time").text());
    $(".timeto").html(child.find("to").find("date").text() + " kl. " + child.find("to").find("time").text());
    $(".location").html(child.find("location").text());
    $(".image").html("<img src='" + child.find("imageUrl").text() + "' width='250' height='250' style='border-radius: 125px; box-shadow: 0 0 8px rgba(0, 0, 0, .8);' />");
    $(".ingress").html("<b>" + child.find("ingress").text() + "</b>");
    $(".description").html(child.find("description").text());
}
