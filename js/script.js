function calcularGanador (){

    let nombre1= document.getElementById(`nombre1`).value
    let nombre2= document.getElementById(`nombre2`).value
    let edad1 = document.getElementById(`edad1`).value
    let edad2 = document.getElementById(`edad2`).value     
    let tiempo1 = document.getElementById(`tiempo1`).value
    let tiempo2 = document.getElementById(`tiempo2`).value
   
    
    if( parseInt(tiempo1) < parseInt(tiempo2)  ){
        swal({
            icon: "success",
            title: `Nombre:${nombre1}, 
                    Edad:${edad1}
                    Tiempo 1/4 milla:${tiempo1}`
                    
                   
          });
         } if( parseInt(tiempo1) > parseInt(tiempo2)  ){
            swal({
                icon: "success",
                title: `Nombre:${nombre2};
                        Edad:${edad2};
                        Tiempo 1/4 milla:${tiempo2}`
                        
                       
              });
          document.getElementById(`tiempo1`, `tiempo2`).value
    }  else if (nombre1 === "" ||nombre2 === "" || edad1 === "" ||edad2 === "" || tiempo1 === "" || tiempo2 === ""){
    swal({
        icon: "info",
        title: "Debe llenar todos los campos! ",
              
      });
    } else if (parseInt(tiempo1) === parseInt(tiempo2))
    swal({
        icon: "success",
        title: "Felicitaciones ambos corredores ganan!",
           
      });
}