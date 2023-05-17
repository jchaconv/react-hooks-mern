
import { useCounter, useFetch } from '../hooks';
import { LoadingQuote } from '../03-examples/LoadingQuote';
import { Quote } from '../03-examples/Quote';

export const Layout = () => {

    const { counter, increment } = useCounter(1);

    const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/character/${ counter }`);

    const { name, location } = !!data && data;

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                isLoading ? (<LoadingQuote/>) : (<Quote characterName={ name } locationName={ location.name } />)
            }

            <button
                className='btn btn-primary'
                onClick={ () => increment(1) }
                disabled={ isLoading }
            >
                Next Quote
            </button>
        </>
    )
}



