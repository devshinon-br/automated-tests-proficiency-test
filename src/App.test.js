import { render } from '@testing-library/react';
import { calculateSum } from './utils';
import App from './App';

describe('Componente App', () => {
  test('deve ser definido', () => {
    const app = render(<App />);
    expect(app).toBeDefined();
  });
});

describe('calculateSum()', () => {
  test('Soma 2 números corretamente', () => {
      expect(calculateSum(1, 2)).toBe(3);
      expect(calculateSum(-1, 5)).toBe(4);
      expect(calculateSum(0, 0)).toBe(0);
      expect(calculateSum(999999, 1)).toBe(1000000);
  });
});
