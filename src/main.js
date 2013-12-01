var x = new Knwl();
var scan = function() {
    document.getElementById('sectionContainer1').innerHTML = ""; //phones
    document.getElementById('sectionContainer2').innerHTML = ""; //dates
    document.getElementById('sectionContainer3').innerHTML = ""; //times
    document.getElementById('sectionContainer4').innerHTML = ""; //links
    document.getElementById('sectionContainer5').innerHTML = ""; //emails
    document.getElementById('sectionContainer6').innerHTML = ""; //emotion
    
    var input = document.getElementById('input').value;
    x.init(input); //initiate knwl on string
    
    
    var phones = x.get('phones');
    for (var i =0; i < phones.length; i++) {
        document.getElementById('sectionContainer1').innerHTML+="<p class = 'sectionItem'>" + phones[i][0] + "</p>";
    }
    
    var dates = x.get('dates');
    for (var i = 0; i < dates.length; i++) {
        document.getElementById('sectionContainer2').innerHTML+="<p class = 'sectionItem'>" + dates[i][0] + "/" + dates[i][1] + "/" + dates[i][2] + "</p>";
    }
    
    var times = x.get('times');
    for (var i = 0; i < times.length; i++) {
        document.getElementById('sectionContainer3').innerHTML+="<p class = 'sectionItem'>" + times[i][0] + ":" + times[i][1] + " " + times[i][2] + "</p>";
    }
    
    var links = x.get('links');
    for (var i = 0; i < links.length; i++) {
        console.log(links[i]);
        document.getElementById('sectionContainer4').innerHTML+="<p class = 'sectionItem'><a href = '" + links[i][0] + "'>" + links[i][0] + "</a></p>";
    }
    
    var emails = x.get('emails');
    for (var i = 0; i < emails.length; i++) {
        document.getElementById('sectionContainer5').innerHTML+="<p class = 'sectionItem'><a href = 'mailto:" + emails[i][0] + "'>" + emails[i][0] + "</a></p>";
    }
    var emotion = x.get('emotion');
    document.getElementById('sectionContainer6').innerHTML+="<p class = 'sectionItem'>" + emotion + "</p>";
    
    
}