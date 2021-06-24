var favoritosPlaylist = JSON.parse(localStorage.getItem('dato'))
console.log(favoritosPlaylist)

let playlist ='';
for (i = 0; i < favoritosPlaylist.length; i++) {
     console.log(i)
    fetch(`https://cors-anywhere.herokuapp.com/http://api.deezer.com/track/${favoritosPlaylist[i]}`)
        .then(res => res.json())
        .then(dato => {
        
console.log(dato)
// iteramos la informacion para buscar el nombre del genero y su foto    
            playlist += `<div><h1>${dato.title}</h1><br><img src=${dato.album.cover_big}><br><button onclick="removeFavorites(${dato.id})" type="button">Remove from favorites!</button></div>`
//pego la informacion que traje en el html en div con id "playlist"
    document.getElementById('myPlaylist').innerHTML = playlist;
    })    
}

function removeFavorites(x){
    var dato = JSON.parse(localStorage.getItem('dato'));
    console.log(x)
    for (let i = 0; i < dato.length; i++) {
        if(dato[i] == x){
            console.log(x)
            console.log(datos[i])
            dato.splice(i,1)
        }
        localStorage.setItem("dato", JSON.stringify(dato));
    }
  }
console.log(localStorage)
