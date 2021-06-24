window.addEventListener('load', function(){

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
    let Search = objetoQuery.get('busquedamusica')

    //buscador
    //loader hace referencia al circulito 
    
    let canciones = document.querySelector('.canciones')
    
    fetch(proxy+'https://api.deezer.com/search?q='+Search)
    .then(function (response) {
       // console.log(response); //
        return response.json();
    })
    .then(function (datos) {
        console.log(datos);
        let loader = document.querySelector('.loader')
        loader.style.display = 'none'
        for (let i = 0; i < 5; i++) {
            const track = datos.data[i];

            //este inner html muestra una lista - resultado de 5 elementos 

            canciones.innerHTML+=`
            <div class="cancion${i+1}">
            <a href="detalle-canciones.html?id=${track.id}"><img class="ayuda" src="${track.album.cover_xl}" alt="">
			<div class="texto"></a><a class="lit"href="detalle-canciones.html?id=${track.id}"><h2>${track.title}</h2></a>
			<a class="lit"href="detalle-artistas.html"><h4>${track.artist.name}</h4></a></div>
			</div>`
            
        }

    })


    
})