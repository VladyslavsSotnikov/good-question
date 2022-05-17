import { CircleColor, CircleItem, CircleScore } from '../models/CircleItem';

export const FIRST_SCORE_OPTION = 0;
export const SECOND_SCORE_OPTION = 50;
export const THIRD_SCORE_OPTION = 100;

export const PURPLE = '#B183D6';
export const YELLOW = '#D6B183';
export const GREEN = '#83D6B1';

const colors: CircleColor[] = [PURPLE, YELLOW, GREEN];
const scors: CircleScore[] = [FIRST_SCORE_OPTION, SECOND_SCORE_OPTION, THIRD_SCORE_OPTION];

export function getCircles(count: number): CircleItem[] {
  if (count <= 0) {
    return [];
  }

  return new Array(Math.floor(count)).fill(null).map((el, index) => {
    const score = getRandomItem() as CircleScore;
    const color = getRandomItem(colors, [0.33, 0.66]) as CircleColor;
    const circle = getCircle(index + 1, score, color, true);

    return circle;
  });
}

export const getCircle = (id: number, score: CircleScore, color: CircleColor, isVisible: boolean): CircleItem => {
  return {
    id,
    score,
    color,
    isVisible,
  };
};

export const getRandomItem = (items: (CircleScore | CircleColor)[] = scors, chances: number[] = [0.1, 0.6]) => {
  let randomItem: CircleScore | CircleColor;
  const randomNumber = Math.random();

  if (randomNumber <= chances[0]) randomItem = items[0];
  else if (randomNumber > chances[0] && randomNumber <= chances[1]) randomItem = items[1];
  else randomItem = items[2];

  return randomItem;
};
