import { CircleItem } from '../models/CircleItem';

const NUMBER_OF_CIRCLES = 91;
const FIRST_SCORE_OPTION = 0;
const SECOND_SCORE_OPTION = 50;
const THIRD_SCORE_OPTION = 100;

const PURPLE = '#B183D6';
const YELLOW = '#D6B183';
const GREEN = '#83D6B1';

export const getCircles = (): CircleItem[] => {
  return new Array(NUMBER_OF_CIRCLES).fill(null).map((el, index) => {
    let score = null;
    let color = null;
    const randomNumber = Math.random();

    if (randomNumber <= 0.1) score = FIRST_SCORE_OPTION;
    else if (randomNumber > 0.1 && randomNumber <= 0.6) score = SECOND_SCORE_OPTION;
    else score = THIRD_SCORE_OPTION;

    if (randomNumber <= 0.33) color = PURPLE;
    else if (randomNumber > 0.33 && randomNumber <= 0.66) color = YELLOW;
    else color = GREEN;

    return {
      id: index + 1,
      score: score,
      color: color,
      isVisible: true,
    };
  });
};
