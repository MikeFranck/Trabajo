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


let queryString = location.search
let objetoQuery = new URLSearchParams(queryString)
let idGenre = objetoQuery.get('id')

let palito = document.querySelector('.palito')
//pide la info a la api
fetch('https://cors-anywhere.herokuapp.com/http://api.deezer.com/genre/'+idGenre)

.then(function (response) {
    // console.log(response); //
     return response.json();
})
 .then(function (datos) {
     console.log(datos);
     
palito.innerHTML+= `<h1>${datos.title}</h1>
 <img class="camion" src="${datos.picture_medium}"`

 })

