$(document).ready(function(){
    $.getJSON("/data",function(d){
        alert(JSON.stringify(d));
        $("#name").text(d.name);
        $("#collagee").text(d.collage);
        $("#regno").text(d.regno);
    })
})