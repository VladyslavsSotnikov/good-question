import {
  PURPLE,
  GREEN,
  YELLOW,
  FIRST_SCORE_OPTION,
  SECOND_SCORE_OPTION,
  THIRD_SCORE_OPTION,
} from '../utils/getCircles';
export interface CircleItem {
  id: number;
  score: CircleScore;
  color: CircleColor;
  isVisible: boolean;
}

export type CircleScore = typeof FIRST_SCORE_OPTION | typeof SECOND_SCORE_OPTION | typeof THIRD_SCORE_OPTION;
export type CircleColor = typeof PURPLE | typeof GREEN | typeof YELLOW;
