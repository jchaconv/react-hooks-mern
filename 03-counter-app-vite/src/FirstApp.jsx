
/*const newMessage = {
    message: 'Hola Julio',
    title: 'Mundo mundo'
}

const getResult = (a, b) => {
    return a + b;
}
*/

import PropTypes from 'prop-types';


export const FirstApp = ({
    title = 'Hola soy Julio',
    subtitle,
    code,
    username

}) => {

    return (
        <>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <h2>{code}</h2>

            <h3>{username}</h3>
            {/* <h2>{newMessage.message}</h2>
            <h3>{getResult(5, 6)}</h3>
            <code>{JSON.stringify(newMessage)}</code>
            <p>Esto es un párrafo</p> */}
        </>
    );

}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired,
    code: PropTypes.number
}

FirstApp.defaultProps = {
    title: 'No hay titulo',
    subtitle: 'No hay subtitulo',
    username: 'Julio Chacon',
    code: 240588
}