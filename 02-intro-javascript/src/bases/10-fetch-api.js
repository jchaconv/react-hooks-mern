
const apiKey = 'ueviUAxduBHuEPvJqcCSIHHcqWjoAB8X';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

/*
Para optimizar este código usamos promesas encadenadas
peticion.then( resp => {
    resp.json().then( data => {
        console.log( data )
    })
})
.catch( console.warn );
*/

/*
Para no hacer data.data aplicamos desestruc.

peticion
    .then( resp => resp.json() )
    .then( data => {
        console.log( data.data )
    })
    .catch( console.warn );
*/

peticion
    .then( resp => resp.json() )
    .then( ({ data }) => {
        const url = data.images.original.url
        const img = document.createElement('img')
        img.src = url;
        document.body.append( img );
        console.log( url )
    })
    .catch( console.warn );





