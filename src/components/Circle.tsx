import { makeStyles } from '@mui/styles';
import { VFC } from 'react';

export interface ICircle {
  id: number;
  score: number;
  color: string;
  isVisible: boolean;
}

export interface ICircleProps extends ICircle {
  onCircleClick: (id: number, score: number) => void;
}

const useStyles = makeStyles({
  circle: {
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
    borderRadius: '100px',
    cursor: 'pointer',
  },
});

export const Circle: VFC<ICircleProps> = ({ id, color, score, isVisible, onCircleClick }) => {
  const classes = useStyles();
  // console.log('isVisible', isVisible);
  return (
    <>
      {isVisible && (
        <div
          className={classes.circle}
          style={{ backgroundColor: color }}
          onClick={() => onCircleClick(id, score)}
        ></div>
      )}
    </>
  );
};
