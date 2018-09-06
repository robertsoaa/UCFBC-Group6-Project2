$.ajax({    
    type: "GET",
    url: "/api/allInventory",
    dataType: "json", 
    success: function(response){
        var vinyl = response;
                //Important code starts here to populate table  
        var yourTableHTML = "";
            jQuery.each(vinyl, function(i,data) {
                $("#inventory-table").append("<tr><td>" + data + "</td></tr>");
            });
    }
    });