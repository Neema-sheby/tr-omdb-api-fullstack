import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/lib/node';
import { BrowserRouter } from 'react-router-dom';
import MovieList from './MovieList';

const server = setupServer(
    rest.get(`http://www.omdbapi.com/`, (req, res, ctx) => {
        return res(
            ctx.json({
                Title: 'Last Action Hero',
                Year: '1993',
                imdbID: 'tt0107362',
                Type: 'movie',
                Poster: 'https://m.media-amazon.com/images/M/MV5BNjdhOGY1OTktYWJkZC00OGY5LWJhY2QtZmQzZDA2MzY5MmNmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
            })
        );
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: jest.fn(() => ({
        pathname: '/search/dinosaur',
    })),
}));

describe('Testing for the about Component MovieList', () => {
    test('render the MovieList class of the component', () => {
        render(
            <BrowserRouter>
                <MovieList />
            </BrowserRouter>
        );

        const movieList = screen.getByLabelText('movielist');
        expect(movieList).toHaveClass('movielList');
    });
});
