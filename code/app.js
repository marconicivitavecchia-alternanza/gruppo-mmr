var init = function(){
    console.log("ciao!!!");
    $("title").text("Marconi alternanza prova");

    $("#username>input")
    .attr("placeholder","wbigger");
    $("#password>input")
    .attr("placeholder","my password");
}

$(document).ready(init);