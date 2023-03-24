import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ComponentMainlayout } from './Mainlayout';

describe('Testing for the ComponentMainlayout - - navigating to the component ComponentHeader', () => {
    test(`When the component is rendered, then the Home option must be present`, async () => {
        render(
            <BrowserRouter>
                <ComponentMainlayout />
            </BrowserRouter>
        );
        const testHome = screen.getAllByRole('link')[2];
        expect(testHome).toBeInTheDocument();
    });

    test(`When the component is rendered, then the Watchlist option must be present`, async () => {
        render(
            <BrowserRouter>
                <ComponentMainlayout />
            </BrowserRouter>
        );
        const links = screen.getAllByRole('link');
        expect(links[3]).toHaveTextContent(/watchlist/i);
    });

    test(`When the component is rendered, then the About option must be present`, async () => {
        render(
            <BrowserRouter>
                <ComponentMainlayout />
            </BrowserRouter>
        );
        const links = screen.getAllByRole('link');
        expect(links[4]).toHaveTextContent(/about/i);
    });
});

describe('Testing for the ComponentMainlayout - - navigating to the component ComponentFooter', () => {
    test(`When the component is rendered, then the Home option must be present`, async () => {
        render(
            <BrowserRouter>
                <ComponentMainlayout />
            </BrowserRouter>
        );
        const testFooter = screen.getByText(/© 2023 PNGC/i);
        expect(testFooter).toBeInTheDocument();
    });
});
