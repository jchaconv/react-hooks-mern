
import { Link } from 'react-router-dom';

const CharactersByHero = ({ characters, alter_ego }) => {
    //if ( alter_ego == characters ) return (<></>);
    //return ( <p>{ characters }</p> )

    ( alter_ego == characters )
        ? (<></>)
        : ( <p>{ characters }</p> )
}


export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {    

    const imageUrl = `/src/assets/heroes/${ id }.jpg`;

    //const charactersByHero = (<p>{ characters }</p>);

    return (

        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutters">

                    <div className="col-4">
                        <img src={ imageUrl } className="card-img" alt="{ superhero }" />
                    </div>

                    <div className="col-8">
                        <h5 className="card-title">{ superhero }</h5>
                        <p className="card-text">{ alter_ego }</p>

                        {/* {
                            ( alter_ego !== characters ) && <p>{ characters }</p>
                        } */}

                        {/* {
                            alter_ego!==characters && charactersByHero
                        } */}

                        <CharactersByHero characters={ characters } alter_ego={ alter_ego} />

                        <p className="card-text">
                            <small className="text-muted" >{ first_appearance }</small>
                        </p>

                        <Link to={`/hero/${ id }`}>
                            Más...
                        </Link>

                    </div>

                </div>
            </div>
        </div>

    )
}


