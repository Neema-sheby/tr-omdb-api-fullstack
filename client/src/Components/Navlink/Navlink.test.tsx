import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ComponentNavlink from './navlink';
import Header from '../Header/header';

describe('Testing for the Navlink Component Home', () => {
    test('renders Home', () => {
        render(
            <BrowserRouter>
                <ComponentNavlink />
            </BrowserRouter>
        );
        const titleElement = screen.getAllByRole('navigation');
        expect(titleElement[1]).toBeInTheDocument();
        expect(titleElement[1]).toHaveClass('nav');
    });

    test('renders Home direct ComponentNavlink', () => {
        render(
            <BrowserRouter>
                <ComponentNavlink />
            </BrowserRouter>
        );
        const titleElement = screen.getAllByText(/Home/i);
        expect(titleElement[0]).toBeInTheDocument();
        expect(titleElement[0]).toHaveTextContent(/Home/i);
    });
});

describe('Testing for the Navlink Component WatchList', () => {
    test('renders WatchList', () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
        const titleElement = screen.getAllByRole('link');
        expect(titleElement[3]).toHaveTextContent(/Watchlist/i);
    });
});

describe('Testing for the Navlink Component About', () => {
    test('renders About', () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
        const titleElement = screen.getAllByText(/About/i);
        expect(titleElement[1]).toBeInTheDocument();
        expect(titleElement[1]).toHaveTextContent(/About/i);
    });

    test('renders Team direct ComponentNavlink', () => {
        render(
            <BrowserRouter>
                <ComponentNavlink />
            </BrowserRouter>
        );
        const titleElement = screen.getAllByText(/Team/i);
        expect(titleElement[0]).toBeInTheDocument();
        expect(titleElement[0]).toHaveTextContent(/Team/i);
    });
});
