import { CircleColor, CircleItem, CircleScore } from '../models/CircleItem';

export const FIRST_SCORE_OPTION = 0;
export const SECOND_SCORE_OPTION = 50;
export const THIRD_SCORE_OPTION = 100;

export const PURPLE = '#B183D6';
export const YELLOW = '#D6B183';
export const GREEN = '#83D6B1';

export function getCircles(count: number): CircleItem[] {
  if (count <= 0) {
    return [];
  }

  return new Array(Math.floor(count)).fill(null).map((el, index) => {
    let score: CircleScore;
    let color: CircleColor;
    const randomNumber = Math.random();

    if (randomNumber <= 0.1) score = FIRST_SCORE_OPTION;
    else if (randomNumber > 0.1 && randomNumber <= 0.6) score = SECOND_SCORE_OPTION;
    else score = THIRD_SCORE_OPTION;

    if (randomNumber <= 0.33) color = PURPLE;
    else if (randomNumber > 0.33 && randomNumber <= 0.66) color = YELLOW;
    else color = GREEN;

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
