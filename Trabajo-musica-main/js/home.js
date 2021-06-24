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

//termina header 

	const proxy = 'https://cors-anywhere.herokuapp.com/';
	let api = `${proxy}https://api.deezer.com/playlist/9201043042`; //playlist con todas la canciones que aparecen en el home

	fetch(api)
		.then(function (response) {
			console.log(response);
			return response.json();
		})
		.then(function (datos) {
			console.log(datos);

			 let cancion1 = document.querySelector('.cancion1');
			 let cancion2 = document.querySelector('.cancion2');
		     let cancion3 = document.querySelector('.cancion3');
			 let cancion4 = document.querySelector('.cancion4');
			 let cancion5 = document.querySelector('.cancion5');

			cancion1.innerHTML += `
			<a href="detalle-canciones.html?id=${datos.tracks.data[0].id}"><img class="ayuda" src="${datos.tracks.data[0].album.cover_xl}" alt="">
			<div class="texto"></a><a class="lit"href="detalle-canciones.html?id=${datos.tracks.data[0].id}"><h2>${datos.tracks.data[0].title}</h2></a>
			<a class="lit"href="detalle-artistas.html"><h4>${datos.tracks.data[0].artist.name}</h4></a></div>
			`;
			cancion2.innerHTML += `
			<a href="detalle-canciones.html?id=${datos.tracks.data[1].id}"><img class="ayuda" src="${datos.tracks.data[1].album.cover_xl}" alt="">
			<div class="texto"></a><a class="lit"href="detalle-canciones.html?id=${datos.tracks.data[1].id}"><h2>${datos.tracks.data[1].title}</h2></a>
			<a class="lit"href="detalle-artistas.html"><h4>${datos.tracks.data[1].artist.name}</h4></a></div>
			`;
			cancion3.innerHTML += `
			<a href="detalle-canciones.html?id=${datos.tracks.data[2].id}"><img class="ayuda" src="${datos.tracks.data[2].album.cover_xl}" alt="">
			<div class="texto"></a><a class="lit"href="detalle-canciones.html?id=${datos.tracks.data[2].id}"><h2>${datos.tracks.data[2].title}</h2></a>
			<a class="lit"href="detalle-artistas.html"><h4>${datos.tracks.data[2].artist.name}</h4></a></div>
			`;
			cancion4.innerHTML += `
			<a href="detalle-canciones.html?id=${datos.tracks.data[3].id}"><img class="ayuda" src="${datos.tracks.data[3].album.cover_xl}" alt="">
			<div class="texto"></a><a class="lit"href="detalle-canciones.html?id=${datos.tracks.data[3].id}"><h2>${datos.tracks.data[3].title}</h2></a>
			<a class="lit"href="detalle-artistas.html"><h4>${datos.tracks.data[3].artist.name}</h4></a></div>
			`;

			cancion5.innerHTML += `
			<a href="detalle-canciones.html?id=${datos.tracks.data[4].id}"><img class="ayuda" src="${datos.tracks.data[4].album.cover_xl}" alt="">
			<div class="texto"></a><a class="lit"href="detalle-canciones.html?id=${datos.tracks.data[4].id}"><h2>${datos.tracks.data[4].title}</h2></a>
			<a class="lit"href="detalle-artistas.html"><h4>${datos.tracks.data[4].artist.name}</h4></a></div>
			`;

			let album1 = document.querySelector('.album1');
			let album2 = document.querySelector('.album2');
			let album3 = document.querySelector('.album3');
			let album4 = document.querySelector('.album4');
			let album5 = document.querySelector('.album5');

			album1.innerHTML += `
			<a href="detalle-album.html?id=${datos.tracks.data[0].album.id}"><img class="ayuda" src="${datos.tracks.data[0].album.cover_xl}" alt="">
			<div class="texto"></a><a class="lit"href="detalle-album.html?id=${datos.tracks.data[0].album.id}"><h3>${datos.tracks.data[0].album.title}</h3></a>
			<a class="lit"href="detalle-artistas.html?id=${datos.tracks.data[0].artist.id}"><h4>${datos.tracks.data[0].artist.name}</h4></a></div>
			`;

			album2.innerHTML += `
			<a href="detalle-album.html?id=${datos.tracks.data[1].album.id}"><img class="ayuda" src="${datos.tracks.data[1].album.cover_xl}" alt="">
			<div class="texto"></a><a class="lit"href="detalle-album.html?id=${datos.tracks.data[1].album.id}"><h2>${datos.tracks.data[1].album.title}</h2></a>
			<a class="lit"href="detalle-artistas.html?id=${datos.tracks.data[1].artist.id}"><h4>${datos.tracks.data[1].artist.name}</h4></a></div>
			`;

			album3.innerHTML += `
			<a href="detalle-album.html?id=${datos.tracks.data[2].album.id}"><img class="ayuda" src="${datos.tracks.data[2].album.cover_xl}" alt="">
			<div class="texto"></a><a class="lit"href="detalle-album.html?id=${datos.tracks.data[2].album.id}"><h2>${datos.tracks.data[2].album.title}</h2></a>
			<a class="lit"href="detalle-artistas.html?id=${datos.tracks.data[2].artist.id}"><h4>${datos.tracks.data[2].artist.name}</h4></a></div>
			`;

			album4.innerHTML += `
			<a href="detalle-album.html?id=${datos.tracks.data[3].album.id}"><img class="ayuda" src="${datos.tracks.data[3].album.cover_xl}" alt="">
			<div class="texto"></a><a class="lit"href="detalle-album.html?id=${datos.tracks.data[3].album.id}"><h2>${datos.tracks.data[3].album.title}</h2></a>
			<a class="lit"href="detalle-artistas.html?id=${datos.tracks.data[3].artist.id}"><h4>${datos.tracks.data[3].artist.name}</h4></a></div>
			`;

			album5.innerHTML += `
			<a href="detalle-album.html?id=${datos.tracks.data[4].album.id}"><img class="ayuda" src="${datos.tracks.data[4].album.cover_xl}" alt="">
			<div class="texto"></a><a class="lit"href="detalle-album.html?id=${datos.tracks.data[4].album.id}"><h2>${datos.tracks.data[4].album.title}</h2></a>
			<a class="lit"href="detalle-artistas.html?id=${datos.tracks.data[4].artist.id}"><h4>${datos.tracks.data[4].artist.name}</h4></a></div>
			`;

		})
		.catch(function (error) {
			console.log('Tu error es: ' + error);
		})

		let apiBadBunny = `${proxy}https://api.deezer.com/artist/10583405`;
		let apiEdSheeran = `${proxy}https://api.deezer.com/artist/384236`;
		let apiHarryStyles = `${proxy}https://api.deezer.com/artist/5313805`;
		let apiLilNasX = `${proxy}https://api.deezer.com/artist/15166511`;
		let apiPinkFloyd = `${proxy}https://api.deezer.com/artist/860`;	

		fetch(apiBadBunny)
				.then(function (response) {
					console.log(response);
					return response.json();
				})
				.then(function (datos) {
					let cantante1 = document.querySelector('.cantante1');
					cantante1.innerHTML += `
					<a href="detalle-artistas.html?id=${datos.id}"><img class="ayuda" src="${datos.picture_xl}" alt="">
					</a><div class="texto"><a class="lit" href="detalle-artistas.html?id=${datos.id}"><h2>${datos.name}</h2></a></div>
					`;
		
				})
				.catch(function (error) {
					console.log('Tu error es: ' + error);
				})

		fetch(apiEdSheeran)
				.then(function (response) {
					console.log(response);
					return response.json();
				})
				.then(function (datos) {
					let cantante2 = document.querySelector('.cantante2');
					cantante2.innerHTML += `
					<a href="detalle-artistas.html?id=${datos.id}"><img class="ayuda" src="${datos.picture_xl}" alt="">
					</a><div class="texto"><a class="lit" href="detalle-artistas.html?id=${datos.id}"><h2>${datos.name}</h2></a></div>
					`;
		
				})
				.catch(function (error) {
					console.log('Tu error es: ' + error);
				})

		fetch(apiHarryStyles)
				.then(function (response) {
					console.log(response);
					return response.json();
				})
				.then(function (datos) {
					let cantante3 = document.querySelector('.cantante3');
					cantante3.innerHTML += `
					<a href="detalle-artistas.html?id=${datos.id}"><img class="ayuda" src="${datos.picture_xl}" alt="">
					</a><div class="texto"><a class="lit" href="detalle-artistas.html?id=${datos.id}"><h2>${datos.name}</h2></a></div>
					`;
		
				})
				.catch(function (error) {
					console.log('Tu error es: ' + error);
				})

		fetch(apiLilNasX)
				.then(function (response) {
					console.log(response);
					return response.json();
				})
				.then(function (datos) {
					let cantante4 = document.querySelector('.cantante4');
					cantante4.innerHTML += `
					<a href="detalle-artistas.html?id=${datos.id}"><img class="ayuda" src="${datos.picture_xl}" alt="">
					</a><div class="texto"><a class="lit" href="detalle-artistas.html?id=${datos.id}"><h2>${datos.name}</h2></a></div>
					`;
		
				})
				.catch(function (error) {
					console.log('Tu error es: ' + error);
				})

		fetch(apiPinkFloyd)
				.then(function (response) {
					console.log(response);
					return response.json();
				})
				.then(function (datos) {
					let cantante5 = document.querySelector('.cantante5');
					cantante5.innerHTML += `
					<a href="detalle-artistas.html?id=${datos.id}"><img class="ayuda" src="${datos.picture_xl}" alt="">
					</a><div class="texto"><a class="lit" href="detalle-artistas.html?id=${datos.id}"><h2>${datos.name}</h2></a></div>
					`;
		
				})
				.catch(function (error) {
					console.log('Tu error es: ' + error);
				})
		
})



 