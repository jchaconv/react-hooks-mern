import heroes, { owners } from "../data/heroes";

//console.log(heroes);


export const getHeroeById = (id) => heroes.find( heroe => heroe.id == id );

//console.log( getHeroeById(1) );
//console.log( getHeroeById(4) );

export const getHeroesByOwner = ( owner ) => heroes.filter( heroe => heroe.owner == owner );

//console.log( getHeroesByOwner('Marvel') );

//console.log( owners );

 