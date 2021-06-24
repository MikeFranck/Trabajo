let busqueda = document.getElementById("busqueda");
let busquedamusica = document.querySelector(".busquedamusica");

busqueda.addEventListener("submit", function(e){
  e.preventDefault()
  if (busquedamusica.value.length < 3 || busquedamusica.value == ""){ // si la busqueda tiene menos de 3 caracteres o esta vacia
    alert ("El largo de la busqueda debe ser mayor a 2 caracteres"); //avisar al usuario
	
      }


   else {    // si la busqueda es mayor o igual a 3 caracteres
	   this.submit()    // hacer la busqueda
      }
  
})

//termina header

//pide la info a la api
fetch('https://cors-anywhere.herokuapp.com/http://api.deezer.com/genre/')
.then(res => res.json())
.then(datos => {
//iteramos la informasion para buscar el nombre del genero y su foto    
let generos ='';
    for(let i of datos["data"]){
     generos += `<div><img href="detalle-generos.html?id=${genre.id}" src=${i.picture_medium}><br>${i.name}<br><br></div>`
}
 
//pego la informasion que traje en el html en div con id "result"
document.getElementById('result').innerHTML = generos;
})
