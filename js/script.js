function calcularGanador (){

    let nombre = document.getElementById(`nombre1`, `nombre2`).value
    let edad = document.getElementById(`edad1`, `edad2`).value 
    let tiempo1 = document.getElementById(`tiempo1`).value
    let tiempo2 = document.getElementById(`tiempo2`).value
    let tiempo = document.getElementById(`tiempo1`,`tiempo2`).value
    tempo1 = parseInt(`tiempo1`)
    tempo2 = parseInt(`tiempo2`)
    
    
    if(parseInt(tiempo1) < parseInt(tiempo2) || parseInt(tiempo1) > parseInt(tiempo2)  ){
        swal({
            icon: "success",
            title: `Nombre:${nombre},
            Edad:${edad},
            Tiempo 1/4 milla:${tiempo}`
                    
                   
          });
          document.getElementById(`tiempo1`, `tiempo2`).value
    }  else if (nombre === "" || edad === "" || tiempo1 === "" || tiempo2 === ""){
    swal({
        icon: "info",
        title: "Debe llenar todos los campos! ",
              
      });
    } else if (tiempo1 === tiempo2)
    swal({
        icon: "success",
        title: "Felicitaciones ambos corredores ganan!",
           
      });
}