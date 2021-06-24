window.addEventListener('load', function(){

    //header

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

const proxy = 'https://cors-anywhere.herokuapp.com/';

let queryString = location.search
let objetoQuery = new URLSearchParams(queryString)
let idTrack = objetoQuery.get('id')

let paloma = document.querySelector('.paloma')

//fetch que trae las canciones desde la api

fetch(proxy+'https://api.deezer.com/track/'+idTrack)

.then(function (response) {
   // console.log(response); //
    return response.json();
})
.then(function (datos) {
    console.log(datos);

paloma.innerHTML+= `<img class="camion" src="${datos.album.cover_big}" alt="">
<div>
    <h1>${datos.title}</h1>
    <a class="lit" href="detalle-artistas.html?id=${datos.artist.id}"><h2>${datos.artist.name}</h2></a>
    <a class="lit" href=""><h2>${datos.album.title}</h2></a>
    <br><br>
    <div class="centro"><button class="button button1"><ion-icon name="play-circle-outline"></ion-icon></button></div>
    <br><br><br><br><br><br><br>
    <button onclick="addToFavorites(${datos.id})" type="button">Add to favorites!</button>
    
</div>`

    

})

.catch(function (error) {
    console.log('Tu error es: ' + error);
})

})
//genero una funcion para guardar los favoritos en el array "favoritos"
function addToFavorites(x){
    //traigo la informacion que guarde en localstorage
        var favoritos = JSON.parse(localStorage.getItem('dato'))
    //me fijo si esta vacio porque ahi me da valor null porque no lo toma como un array   
            if (favoritos === null) {
    //si esta vacio lo declaro como un array vacio
                favoritos = []
    //aca uso la funcion push para guardar el id
                favoritos.push(x)
    //aca guardo el nuevo valor del array en localstorage            
                localStorage.setItem('dato', JSON.stringify(favoritos));
            } else {
    //si no esta vacio me salteo tener que declararlo como un array y hago lo mismo que antes con push y setItem            
                favoritos.push(x)
                localStorage.setItem('dato', JSON.stringify(favoritos));
            }
    }
    
    
    
    
    