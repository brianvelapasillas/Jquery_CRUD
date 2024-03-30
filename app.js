window.alert("I'm in javascript");
console.log("I'm in Javascript from the console");


$(document).ready(function(){
    console.log("I'm in Jquery");

    $.ajax({
        url:'list_supplier.php',
        type:'GET',
        success: function(response){
          //console.log(response);
          let respuesta=JSON.parse(response);  
    
          let template='';

          respuesta.forEach(resp => {
            console.log(resp);
            
        });
    
        } // success
    });  //end ajax


}); //end program


