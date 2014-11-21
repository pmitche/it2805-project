$(document).ready(function(){


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



    $.ajax({
        url: 'xml/events.xml', // name of file you want to parse
        dataType: "xml",
        success: parse,
        error: function(){alert("Error: Something went wrong");}
    });
});
