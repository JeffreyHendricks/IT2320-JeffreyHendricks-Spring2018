$(document).ready(function() {


    var members = document.getElementById("members");

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open('GET', 'http://mysafeinfo.com/api/data?list=englishmonarchs&format=json', true);

    xmlhttp.onload = function() {

        var responseObject = JSON.parse(xmlhttp.responseText);

        if (xmlhttp.status == 200) {

            myFunction(responseObject);

        }


    };
    xmlhttp.send();

    function myFunction(data) {

        var emptyString = "";

        for (i = 0; i < data.length; i++) {

            emptyString += "<p> The name of the person is " + "<b>" + data[i].nm + "</b>";
            emptyString += "</br> and the city they are from is " + "<b>" + data[i].cty + "</b>";
            emptyString += "</br> while the make of the house is " + "<b>" + data[i].hse + "</b>";
            emptyString += "</br> and its years of age are from " + "<b>" + data[i].yrs + "</b>";
            emptyString += "</p>";
        }

        members.innerHTML = emptyString;

    }


    $.ajax({
        type: 'GET',
        url: "levels.xml",
        data: 'xml',
        success: myFunction

    });

    function myFunction(xml) {

        $(xml).find('level').each(function() {

            var type = $(this).find("type").text();

            $('members').html(type);

        });
    }

});