$(document).ready(function() {


    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
        if (xmlhttp.status == 200) {
            responseObject = JSON.parse(xmlhttp.responseText);

            var newContent = "";
            for (var i = 0; i < responseObject.members.length; i++) {
                newContent += '<div class="members">';
                newContent += '<p><b>' + responseObject.members[i].name + '""';
                newContent += '</br>' + responseObject.members[i].address + '""';
                newContent += '</br>' + responseObject.members[i].city + '""';
                newContent += "</div>";
            }
            document.getElementById("members").innerHTML = newContent;
        }
    };
    xmlhttp.open('GET', 'members.json', true);
    xmlhttp.send(null);
});