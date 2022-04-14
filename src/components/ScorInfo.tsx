import { Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { VFC } from 'react';

const useStyles = makeStyles({
  info: {
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

interface ScoreInfoProps {
  score: number;
  currentScore: number | null;
  onClickReset: () => void;
  onClickGenerate: () => void;
}

export const ScoreInfo: VFC<ScoreInfoProps> = ({ score, currentScore, onClickGenerate, onClickReset }) => {
  const classes = useStyles();

  return (
    <div className={classes.info}>
      <Typography variant='h4' className={classes.text}>
        Total score:{score}
      </Typography>
      <Typography variant='h4' className={classes.text}>
        Current score:{currentScore}
      </Typography>
      <Button onClick={onClickReset}>Reset</Button>
      <Button onClick={onClickGenerate}>Generate</Button>
    </div>
  );
};
