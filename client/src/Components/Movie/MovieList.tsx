import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import ErrorComponent from '../ErrorHandler/ErrorComponent';
import { MoviesContext, MoviesContextType } from './Context/MoviesContext';
import RenderMoviesList from './RenderMoviesList';
import MUIPagination from '../Pagination/MUIPagination';
import MovieListHeading from './MovieListHeading';

const MovieList: React.FC = () => {
    const { movies, errorMsg, count, page, onChange } =
        useContext<MoviesContextType>(MoviesContext);

    const location = useLocation();
    const { pathname } = location;
    const searchedMovieName = pathname.split('/')[2];

    return (
        <>
            <MovieListHeading searchedMovieName={searchedMovieName} />
            <div className='pagination__down-arrow'></div>
            <MUIPagination count={count} page={page} onChange={onChange} />
            <div className='movieList' aria-label='movieList'>
                <RenderMoviesList
                    movies={movies}
                    searchedMovieName={searchedMovieName}
                    onClick={() => {}}
                />
            </div>
            {errorMsg && <ErrorComponent>{errorMsg}</ErrorComponent>}
            <MUIPagination count={count} page={page} onChange={onChange} />
        </>
    );
};

export default MovieList;
