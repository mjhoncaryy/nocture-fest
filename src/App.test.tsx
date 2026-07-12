import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import App from './App';

vi.mock('./components/LiquidEther', () => ({
  default: () => <div data-testid="liquid-ether" />
}));

describe('Nocturne Fest', () => {
  it('renders the primary festival journey', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /nocturne fest/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /find your frequency/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /choose your way in/i })).toBeInTheDocument();
  });
});
