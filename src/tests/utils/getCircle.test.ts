import { getCircle } from '../../utils/getCircles';

describe('getCircle function', () => {
  it('returns correct circle', () => {
    const expectedCircle = {
      id: 5,
      score: 100,
      color: '#B183D6',
      isVisible: true,
    };

    expect(getCircle(5, 100, '#B183D6', true)).toMatchObject(expectedCircle);
  });

  it('returns null if provided negative id', () => {
    expect(getCircle(-1, 100, '#B183D6', true)).toBe(null);
  });
});
