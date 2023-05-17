
import { useCounter, useFetch } from '../hooks';
import { LoadingQuote } from './LoadingQuote';
import { Quote } from './Quote';

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);

    const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/character/${ counter }`);

    const { name, location } = !!data && data;

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                isLoading ? (<LoadingQuote/>) : (<Quote characterName={ name } locationName={ location.name } />)
                    /*? (
                        <div className='alert alert-info text-center'>
                            Loading...
                        </div>
                    )
                    : (
                        <blockquote className='blockquote text-end'>
                            <p className='mb-2'>{ location.name }</p>
                            <footer className='blockquote-footer'>{ name }</footer>
                        </blockquote>
                    )*/
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



