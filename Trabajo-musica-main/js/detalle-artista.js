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
    let idArtist = objetoQuery.get('id')
    
    let paloma = document.querySelector('.paloma')

    //fetch que muestra los datos del artista
    
    fetch(proxy+'https://api.deezer.com/artist/'+idArtist)
    .then(function (response) {
       // console.log(response); //
        return response.json();
    })
    .then(function (datos) {
        console.log(datos);
        paloma.innerHTML+= `  <div><img class="camion" src="${datos.picture_big}" alt=""></div>
        <div>
            <h1>${datos.name}</h1>
            <h2>${datos.type}</h2>
            <h2>Fans: <a class="lit" href="">${datos.nb_fan}</a></h2>
        </div>
        <div>
            <h3>5 albums de ${datos.name} mas escuchadas de Rythm:</h3>
            <div class="orden">        
            </div>
        </div>`

        //fetch que muestra los 5 almbums que estan al costado

        let orden = document.querySelector (".orden")

        fetch(proxy+'https://api.deezer.com/artist/'+idArtist+'/albums')
        .then(function (response) {
           // console.log(response); //
            return response.json();
        })
        .then(function (datos) {
            console.log(datos);
            for (let i = 0; i < 5; i++) {
                const album = datos.data[i];
               orden.innerHTML+=`<div><a class="lit" href="detalle-album.html?id=${album.id}"><img src="${album.cover_big}" alt=""><h3 class="lit">${album.title}</h3></a></div>` 
            }
        })
    })


  


    
})

