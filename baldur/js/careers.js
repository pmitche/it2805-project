/**
 * Created by Paul on 21.11.2014.
 */

$(document).ready(function(){
    var functionToRun;
    if (window.location.pathname == "/it2805-project/baldur/career/career.html"){
        functionToRun = parse;
    } else if (window.location.pathname == "/it2805-project/baldur/career/accenture.html"){
        functionToRun = parseAccenture;
    } else if (window.location.pathname == "/it2805-project/baldur/career/ciber.html"){
        functionToRun = parseCiber;
    } else if (window.location.pathname == "/it2805-project/baldur/career/facebook.html"){
        functionToRun = parseFacebook;
    } else if (window.location.pathname == "/it2805-project/baldur/career/knowit.html"){
        functionToRun = parseKnowit;
    } else if (window.location.pathname == "/it2805-project/baldur/career/mazemap.html"){
        functionToRun = parseMazemap;
    } else if (window.location.pathname == "/it2805-project/baldur/career/visma.html"){
        functionToRun = parseVisma;
    }
        $.ajax({
            url: 'xml/careers.xml', // name of file you want to parse
            dataType: "xml",
            success: functionToRun,
            error: function(){alert("Error: Something went wrong");}
        });
});

function parse(document){
    var counter = 0;
    var output = "";
    $(document).find("career").each(function(){
        var newRow = "";
        var endRow = "";
        if(counter === 0){
            newRow = "<div class='row'>";
        }
        if(counter >= 2){
            counter = -1;
            endRow = "</div>";
        }
        output += newRow+'<div class="col-lg-4 col-sm-4"><h3>' +
        '<a class="" href="' + $(this).find('linkUrl').text() + '">' +
        '<img width="360" style="margin-bottom: 10px" src="' + $(this).find('imageUrl').text() + '"/></a><br>' +
        '<b>' + $(this).find('title').text() + '</b> ' +
        '<p>' + $(this).find('short-description').text() + '</p><br>' +
        '</div>'+endRow;
        counter++;
    });
    $("#careerList").append(output);
}

function parseAccenture(document){
    var child = $(document).find('career[name="accenture"]');
    $(".title").html(child.find("title").text());
    $(".companyName").html(child.find("companyName").text());
    $(".deadline").html(child.find("deadline").find("date").text() + " kl. " + child.find("deadline").find("time").text());
    $(".startdate").html(child.find("startupDate").text());
    $(".short-description").html("<b>" + child.find("short-description").text() + "</b>");
    $(".long-description").html(child.find("long-description").text());
    $(".image").html("<img src='" + child.find("imageUrl").text() + "'/>");
    $(".contact-name").html(child.find("contact").find("name").text());
    $(".contact-mail").html("<a href='mailto:'" + child.find("contact").find("mail").text() + "'>" + child.find("contact").find("mail").text() + "</a>");
    $(".contact-phone").html(child.find("contact").find("phone").text());
}

function parseCiber(document){
    var child = $(document).find('career[name="ciber"]');
    $(".title").html(child.find("title").text());
    $(".companyName").html(child.find("companyName").text());
    $(".deadline").html(child.find("deadline").find("date").text() + " kl. " + child.find("deadline").find("time").text());
    $(".startdate").html(child.find("startupDate").text());
    $(".short-description").html("<b>" + child.find("short-description").text() + "</b>");
    $(".long-description").html(child.find("long-description").text());
    $(".image").html("<img src='" + child.find("imageUrl").text() + "'/>");
    $(".contact-name").html(child.find("contact").find("name").text());
    $(".contact-mail").html("<a href='mailto:'" + child.find("contact").find("mail").text() + "'>" + child.find("contact").find("mail").text() + "</a>");
    $(".contact-phone").html(child.find("contact").find("phone").text());
}

function parseFacebook(document){
    var child = $(document).find('career[name="facebook"]');
    $(".title").html(child.find("title").text());
    $(".companyName").html(child.find("companyName").text());
    $(".deadline").html(child.find("deadline").find("date").text() + " kl. " + child.find("deadline").find("time").text());
    $(".startdate").html(child.find("startupDate").text());
    $(".short-description").html("<b>" + child.find("short-description").text() + "</b>");
    $(".long-description").html(child.find("long-description").text());
    $(".image").html("<img src='" + child.find("imageUrl").text() + "'/>");
    $(".contact-name").html(child.find("contact").find("name").text());
    $(".contact-mail").html("<a href='mailto:'" + child.find("contact").find("mail").text() + "'>" + child.find("contact").find("mail").text() + "</a>");
    $(".contact-phone").html(child.find("contact").find("phone").text());
}

function parseKnowit(document){
    var child = $(document).find('career[name="knowit"]');
    $(".title").html(child.find("title").text());
    $(".companyName").html(child.find("companyName").text());
    $(".deadline").html(child.find("deadline").find("date").text() + " kl. " + child.find("deadline").find("time").text());
    $(".startdate").html(child.find("startupDate").text());
    $(".short-description").html("<b>" + child.find("short-description").text() + "</b>");
    $(".long-description").html(child.find("long-description").text());
    $(".image").html("<img src='" + child.find("imageUrl").text() + "'/>");
    $(".contact-name").html(child.find("contact").find("name").text());
    $(".contact-mail").html("<a href='mailto:'" + child.find("contact").find("mail").text() + "'>" + child.find("contact").find("mail").text() + "</a>");
    $(".contact-phone").html(child.find("contact").find("phone").text());
}

function parseMazemap(document){
    var child = $(document).find('career[name="mazemap"]');
    $(".title").html(child.find("title").text());
    $(".companyName").html(child.find("companyName").text());
    $(".deadline").html(child.find("deadline").find("date").text() + " kl. " + child.find("deadline").find("time").text());
    $(".startdate").html(child.find("startupDate").text());
    $(".short-description").html("<b>" + child.find("short-description").text() + "</b>");
    $(".long-description").html(child.find("long-description").text());
    $(".image").html("<img src='" + child.find("imageUrl").text() + "'/>");
    $(".contact-name").html(child.find("contact").find("name").text());
    $(".contact-mail").html("<a href='mailto:'" + child.find("contact").find("mail").text() + "'>" + child.find("contact").find("mail").text() + "</a>");
    $(".contact-phone").html(child.find("contact").find("phone").text());
}

function parseVisma(document){
    var child = $(document).find('career[name="visma"]');
    $(".title").html(child.find("title").text());
    $(".companyName").html(child.find("companyName").text());
    $(".deadline").html(child.find("deadline").find("date").text() + " kl. " + child.find("deadline").find("time").text());
    $(".startdate").html(child.find("startupDate").text());
    $(".short-description").html("<b>" + child.find("short-description").text() + "</b>");
    $(".long-description").html(child.find("long-description").text());
    $(".image").html("<img src='" + child.find("imageUrl").text() + "'/>");
    $(".contact-name").html(child.find("contact").find("name").text());
    $(".contact-mail").html("<a href='mailto:'" + child.find("contact").find("mail").text() + "'>" + child.find("contact").find("mail").text() + "</a>");
    $(".contact-phone").html(child.find("contact").find("phone").text());
}