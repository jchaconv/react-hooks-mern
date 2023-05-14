

const personajes = ['Goku', 'Vegeta', 'Gohan', 'Trunks']

console.log(personajes);


const [ , , p1 ] = personajes;

console.log( p1 );

const retornaArreglo = () => {
    return ['ABC', 123]
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);


console.log('===============');

const usarState = (valor) => {

    return [valor, () => { console.log('Hola Mundo') } ];

}

const [nombre, setNombre ] = usarState( 'Julio' );

console.log( nombre );
setNombre();