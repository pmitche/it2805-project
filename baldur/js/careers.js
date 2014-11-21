/**
 * Created by Paul on 21.11.2014.
 */

$(document).ready(function(){
        $.ajax({
            url: 'xml/careers.xml', // name of file you want to parse
            dataType: "xml",
            success: parse,
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