import React from 'react';

const searchIcon = require('../../Images/search.png');

interface MovieListHeadingProp {
    searchedMovieName: string;
}

const MovieListHeading: React.FC<MovieListHeadingProp> = ({
    searchedMovieName,
}) => {
    return (
        <div className='heading__img'>
            <img src={searchIcon} className='home__btn-img' alt='search icon' />
            <h3 className='heading__3'>
                {`Search Results for : ${searchedMovieName
                    .split('%20')
                    .join(' ')}`}
            </h3>
        </div>
    );
};

export default MovieListHeading;
