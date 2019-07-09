$(document).ready(function(){
 $('#get-data').click(function(){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-1.json');
    ourRequest.onload = function(){
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData)
    };
    ourRequest.send();
    });         
    function renderHTML(data){
        var htmlString = '';
        for(i = 0; i < data.length; i ++){
            htmlString += "<ul>" + "<li>" + data[i].name +"</li>"+ "<li> " + data[i].species +"</li>"+ ".</ul>";
            for(j = 0; j < data[i].foods.likes.length; j++){
                htmlString += data[i].foods.likes[j];
            }
             $('#show-data').prepend(htmlString);
        }
    }
    $("checkmark").on("click",function(){
       alert('oi')
        // $('-disabled').toggleClass('-enabled');
    })
});
    






