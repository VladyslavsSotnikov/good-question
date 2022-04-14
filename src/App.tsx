import { makeStyles } from '@mui/styles';
import { useState } from 'react';

import { Circles } from './components/Circles';
import { Header } from './components/Header';
import { ScoreInfo } from './components/ScorInfo';
import { CircleItem } from './models/CircleItem';
import { getCircles } from './utils/getCircles';

const DEFAULT_SCORE = 0;

const useStyles = makeStyles({
  container: {
    display: 'flex',
    margin: '40px 40px',
  },
});

export const App = () => {
  const classes = useStyles();
  const [circles, setCircles] = useState<CircleItem[] | null>(null);
  const [score, setScore] = useState<number>(DEFAULT_SCORE);
  const [currentScore, setCurrentScore] = useState<number | null>(null);

  const onClickReset = () => {
    setScore(DEFAULT_SCORE);
    setCurrentScore(null);
  };

  const onClickGenerate = () => {
    const circles = getCircles();
    setCircles(circles);
  };

  return (
    <>
      <Header />
      <div className={classes.container}>
        <Circles circles={circles} setScore={setScore} setCurrentScore={setCurrentScore} setCircles={setCircles} />
        <ScoreInfo
          score={score}
          currentScore={currentScore}
          onClickGenerate={onClickGenerate}
          onClickReset={onClickReset}
        />
      </div>
    </>
  );
};
