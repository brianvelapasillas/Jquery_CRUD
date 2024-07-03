window.alert("I'm in javascript");
console.log("I'm in Javascript from the console");


$(document).ready(function(){
    console.log("I'm in Jquery");

    readSupp();

  function readSupp(){
    $.ajax({
        url:'list_supplier.php',
        type:'GET',
        success: function(response){
          //console.log(response);
          let respuesta=JSON.parse(response);  
    
          let template='';

          respuesta.forEach(resp => {
            //console.log(resp);
            template+=` <tr id_prov="${resp.id}"> 
                            <td> ${resp.id} </td>
                            <td> <a href="#" class="nom-item">${resp.nombre} </a></td>
                            <td> ${resp.ap} </td>
                            <td> ${resp.am} </td>
                            <td> <button class="borra-prov btn btn-danger"> Eliminar </button> </td>
                            
                        </tr>`
                //console.log(template);
        });
        $('#tableID').html(template);
    
        } // success
    });  //end ajax
  }

  //delete supplier
  $(document).on('click', '.borra-prov',function(){
    if(confirm('are you sure you want to delete de supplier?')){} // fin confirm

    let elemento=$(this)[0].parentElement.parentElement;
    console.log(elemento);

    let id=$(elemento).attr('id_prov');
    console.log(id);

    //shows the element where you are
    console.log($(this));

    $.post('delete-supplier.php',{id},function(response){
      console.log(response);
      readSupp();   // llama a función leer tareas
    });

  });

}); //end programss