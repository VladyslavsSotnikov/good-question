import { makeStyles } from '@mui/styles';
import { useCallback, VFC } from 'react';
import { CircleItem } from '../models/CircleItem';

import { Circle } from './Circle';

interface CirclesProps {
  circles: (CircleItem | null)[] | null;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setCurrentScore: React.Dispatch<React.SetStateAction<number | null>>;
  setCircles: React.Dispatch<React.SetStateAction<(CircleItem | null)[] | null>>;
}

const useStyles = makeStyles({
  circles: {
    width: '900px',
    height: '480px',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
  },

  circleWrapper: {
    width: '50px',
    height: '50px',
  },
});

export const Circles: VFC<CirclesProps> = ({ circles, setScore, setCurrentScore, setCircles }) => {
  const classes = useStyles();

  const onCircleClick = useCallback(
    (id: number, score: number) => {
      setCurrentScore(score);

      setScore((prevState) => {
        if (score !== 0) {
          return prevState + score;
        } else return 0;
      });

      setCircles(
        (prevState) =>
          prevState &&
          prevState.map((circle) => {
            if (!circle) {
              return null;
            }

            if (circle.id === id) {
              return {
                ...circle,
                isVisible: false,
              };
            } else {
              return circle;
            }
          })
      );
    },
    [setScore, setCurrentScore, setCircles]
  );

  return (
    <div className={classes.circles}>
      {circles &&
        circles.map((circle) => {
          if (!circle) {
            return null;
          }

          return (
            <div key={circle.id} className={classes.circleWrapper}>
              <Circle
                id={circle.id}
                color={circle.color}
                score={circle.score}
                isVisible={circle.isVisible}
                onCircleClick={onCircleClick}
              />
            </div>
          );
        })}
    </div>
  );
};
