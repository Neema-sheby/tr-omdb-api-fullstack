import { render, screen } from '@testing-library/react';
import ComponentHeader from './header';
import { BrowserRouter } from 'react-router-dom';

describe('Testing for the Header Component Label', () => {
    test(`When the component is rendered, then the Header Component must be present`, async () => {
        render(
            <BrowserRouter>
                <ComponentHeader />
            </BrowserRouter>
        );
        const testHome = screen.getAllByRole('link');
        expect(testHome[0]).toHaveTextContent('PNGC IMDB');
    });
});

describe('Test for header component navigation', () => {
    test(`When the component is rendered, then the Header Component must be present`, async () => {
        render(
            <BrowserRouter>
                <ComponentHeader />
            </BrowserRouter>
        );
        const testHome = screen.getAllByRole('link');
        expect(testHome[2]).toHaveTextContent(/home/i);
    });
});
