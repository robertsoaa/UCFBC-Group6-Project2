
console.log("hello, we're inside the script");

$.ajax({
    type: "GET",
    url: "api/allInventory"
  }).then(function(response){
        var vinyl = response;
        //Important code starts here to populate table  
    var yourTableHTML = "";
    console.log("HELLO");
    jQuery.each(vinyl, function(i, data) {
        $("#inventoryTable").append("<tr><td>" + data.artist + "</td><td>" + data.album + "</td><td>" + data.genre + "</td><td>$" + data.price + "</td><td></td> <td><button type='button'id="+data.id+" class ='updateStock'>Update Stock!</button></td></tr>");
    });

  });



// $.get("/api/allInventory", function(response){
//     console.log("we're inside the get");
//    var vinyl = response;
//            //Important code starts here to populate table  
//    var yourTableHTML = "";
//        jQuery.each(vinyl, function(i, data) {
//            $("#inventoryTable").append("<tr><td>" + data.artist + "</td><td>" + data.album + "</td><td>" + data.genre + "</td><td>$" + data.price + "</td><td></td> <td><button type='button'id="+data.id+" class ='updateStock'>Update Stock!</button></td></tr>");
//        });
// });

$(".updateStock").on("click", function(){

 alert("you clicked link with id: "+ $(".updateStock").getAttribute("id"));
});