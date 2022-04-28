import { getCircles } from '../../utils/getCircles';

describe('getCircles function', () => {
  it('returns correct count circles', () => {
    expect(getCircles(2)?.length).toBe(2);
    expect(getCircles(100)?.length).toBe(100);
  });

  it('returns null if provided nagative number', () => {
    expect(getCircles(-1)).toBe(null);
    expect(getCircles(-100)).toBe(null);
  });

  it('returns null if provided zero', () => {
    expect(getCircles(0)).toBe(null);
  });

  it('returns the integer part of number', () => {
    expect(getCircles(4.7)?.length).toBe(4);
    expect(getCircles(0.1)?.length).toBe(0);
  });
});
