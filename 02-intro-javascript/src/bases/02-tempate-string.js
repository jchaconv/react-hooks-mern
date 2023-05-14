

const nombre = 'Julio';

const nombreCompleto = `${nombre} Chacon`;

function getSaludo(nombre) {
    return 'Hola ' + nombre;
}


console.log(`template string: ${ getSaludo(nombreCompleto) }`);



