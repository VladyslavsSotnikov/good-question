import { getRandomItem, GREEN, PURPLE, YELLOW } from '../../utils/getCircles';

describe('getRandomItem function', () => {
  it('returns 0 if random number is less then first chance', () => {
    const mockMath = Object.create(global.Math);
    mockMath.random = () => 0.05;
    global.Math = mockMath;
    expect(getRandomItem([0, 50, 100], [0.1, 0.6])).toBe(0);
  });

  it('returns 50 if random number is between first and seconde chance', () => {
    const mockMath = Object.create(global.Math);
    mockMath.random = () => 0.5;
    global.Math = mockMath;
    expect(getRandomItem([0, 50, 100], [0.1, 0.6])).toBe(50);
  });

  it('returns 100 if random number is more then seconde chance', () => {
    const mockMath = Object.create(global.Math);
    mockMath.random = () => 0.9;
    global.Math = mockMath;
    expect(getRandomItem([0, 50, 100], [0.1, 0.6])).toBe(100);
  });

  it('returns PURPLE color if random number is less then first chance', () => {
    const mockMath = Object.create(global.Math);
    mockMath.random = () => 0.01;
    global.Math = mockMath;
    expect(getRandomItem([PURPLE, YELLOW, GREEN], [0.33, 0.66])).toBe('#B183D6');
  });

  it('returns YELLOW color if random number is between first and seconde chance', () => {
    const mockMath = Object.create(global.Math);
    mockMath.random = () => 0.5;
    global.Math = mockMath;
    expect(getRandomItem([PURPLE, YELLOW, GREEN], [0.33, 0.66])).toBe(YELLOW);
  });

  it('returns GREEN color if random number is more then seconde chance', () => {
    const mockMath = Object.create(global.Math);
    mockMath.random = () => 0.9;
    global.Math = mockMath;
    expect(getRandomItem([PURPLE, YELLOW, GREEN], [0.33, 0.66])).toBe(GREEN);
  });
});
