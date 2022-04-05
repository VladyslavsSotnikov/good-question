import { Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { Circle, ICircle } from './components';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    margin: '40px 40px',
  },

  title: {
    textAlign: 'center',
    fontFamily: `'Noto Sans KR', sans-serif !important`,
    fontWeight: '700 !important',
  },

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

  rightSide: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '350px',
    gap: '20px',
  },

  text: {
    textAlign: 'center',
  },
});

const emptyArray: null[] = new Array(91).fill(null);

export const App = () => {
  const classes = useStyles();
  const [circles, setCircles] = useState<ICircle[] | null>(null);
  const [score, setScore] = useState<number>(0);
  const [currentScore, setCurrentScore] = useState<number | null>(null);

  const onCircleClick = (id: number, score: number) => {
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
  };

  const onClickReset = () => {
    setScore(0);
    setCurrentScore(null);
  };

  const onClickGenerate = () => {
    const circles = emptyArray.map((el, index): ICircle => {
      let score = null;
      let color = null;
      const randomNumber = Math.random();

      if (randomNumber <= 0.1) score = 0;
      else if (randomNumber > 0.1 && randomNumber <= 0.6) score = 50;
      else score = 100;

      if (randomNumber <= 0.33) color = '#B183D6';
      else if (randomNumber > 0.33 && randomNumber <= 0.66) color = '#D6B183';
      else color = '#83D6B1';

      return {
        id: index + 1,
        score: score,
        color: color,
        isVisible: true,
      };
    });
    setCircles(circles);
  };

  return (
    <>
      <Typography variant='h3' className={classes.title}>
        Удачный вопрос
      </Typography>
      <div className={classes.container}>
        <div className={classes.circles}>
          {circles &&
            circles.map((circle, index) => (
              <div key={index} className={classes.circleWrapper}>
                <Circle
                  id={circle.id}
                  color={circle.color}
                  score={circle.score}
                  isVisible={circle.isVisible}
                  onCircleClick={onCircleClick}
                />
              </div>
            ))}
        </div>
        <div className={classes.rightSide}>
          <Typography variant='h2' className={classes.text}>
            Сумма:{score}
          </Typography>
          <Typography variant='h2' className={classes.text}>
            Выпало:{currentScore}
          </Typography>
          <Button onClick={onClickReset}>Сбросить</Button>
          <Button onClick={onClickGenerate}>Cгенерировать</Button>
        </div>
      </div>
    </>
  );
};
