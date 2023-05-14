import { getHeroeById, getHeroesByOwner } from "../bases/08-imp-exp";


const promesa = new Promise( (resolve, reject) => {

    setTimeout(() => {
       const heroe = getHeroeById(2);
       resolve( heroe );
       //reject('No se pudo encontrar el heroe');
    }, 2000);

});

//si se hizo correctamente la promesa
promesa.then( (heroe) => {
    console.log('heroe', heroe);
}).catch(err => console.warn( err ));



const getHeroeByIdAsync = ( id ) => {

    return new Promise( (resolve, reject) => {

        setTimeout(() => {
           const heroe = getHeroeById(id);
           if( heroe ) { //si existe
                resolve( heroe );                
           } else {
                reject('No se pudo encontrar el heroe');    
           }         
           
        }, 2000);
    
    });

}

getHeroeByIdAsync(35)
    .then( console.log )
    .catch( console.warn );












