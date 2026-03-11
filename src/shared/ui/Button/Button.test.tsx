import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import { ThemeButton } from './types';

describe('Button', () => {
    test('render', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('render with theme Clear', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
