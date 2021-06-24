
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

// termina header

    const proxy = 'https://cors-anywhere.herokuapp.com/';
    
    let queryString = location.search
    let objetoQuery = new URLSearchParams(queryString)
    let idAlbum = objetoQuery.get('id')
    
    let paloma = document.querySelector('.paloma')
    
    fetch(proxy+'https://api.deezer.com/album/'+idAlbum)
    .then(function (response) {
        return response.json();
    })
    .then(function (datos) {
        console.log(datos);
        
    paloma.innerHTML+= `
    <img class="pajaro img" src=${datos.cover_xl} alt="">
    <div>
        <h1>${datos.title}</h1>
        <a class="lit" href="detalle-artistas.html"><h2>${datos.artist.name}</h2></a>
        <a class="lit" href="detalle-generos.html"><h2>Género: ${datos.genres.data.name}</h2></a>
        <h3>Fecha de estreno: ${datos.release_date}</h3>
        
        
        
    </div>
    <div>
        <h3>Canciones recomendadas de este álbum:</h3>
        <div class="orden">
            <div><a class="lit" href="detalle-canciones.html"><img class="ayuda" src=${datos.cover_xl} alt=""><h3 class="lit">${datos.tracks.data[0].title}</h3></a></div>
            <div><a class="lit" href="detalle-canciones.html"><img class="ayuda" src=${datos.cover_xl} alt=""><h3 class="lit">${datos.tracks.data[1].title}</h3></a></div>
            <div><a class="lit" href="detalle-canciones.html"><img class="ayuda" src=${datos.cover_xl} alt=""><h3 class="lit">${datos.tracks.data[2].title}</h3></a></div>
            <div><a class="lit" href="detalle-canciones.html"><img class="ayuda" src=${datos.cover_xl} alt=""><h3 class="lit">${datos.tracks.data[3].title}</h3></a></div>
        </div>
    </div>
    
    `
    
    
    })
    
    .catch(function (error) {
        console.log('Tu error es: ' + error);
    })


    fetch(proxy+'https://api.deezer.com/album/'+idAlbum)
    .then(function (response) {
        return response.json();
    })
    .then(function (datos) {
        let cancionesAlbum = document.querySelector('.cancionesAlbum')
        cancionesAlbum.innerHTML += '<h3 >Las canciones de este álbum son:</h3> <a class="lit" href="detalle-canciones.html"></a>'
            for (let i = 0; i < 100 ; i++){
            cancionesAlbum.innerHTML += `<a class="listaAlbum"href="detalle-canciones.html"><h4>${datos.tracks.data[i].title} </h4></a> ` 
          }
    })
    .catch(function (error) {
        console.log('Tu error es: ' + error);
    })
    
})
