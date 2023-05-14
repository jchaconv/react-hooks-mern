

const apiKey = 'ueviUAxduBHuEPvJqcCSIHHcqWjoAB8X';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);


const getImagen = async () => {

    try {
        
        const apiKey = 'ueviUAxduBHuEPvJqcCSIHHcqWjoAB8X';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
    
        const { url } = data.images.original;
        const img = document.createElement('img')
    
        img.src = url;
        document.body.append( img );
    
        console.log( url );

    } catch (error) {
        
        console.error( error );

    }

}

getImagen();


/*peticion
    .then( resp => resp.json() )
    .then( ({ data }) => {
        const url = data.images.original.url
        const img = document.createElement('img')
        img.src = url;
        document.body.append( img );
        console.log( url )
    })
    .catch( console.warn );



*/










