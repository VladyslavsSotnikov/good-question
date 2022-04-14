import { makeStyles } from '@mui/styles';
import { memo, VFC } from 'react';
import { CircleItem } from '../models/CircleItem';

export interface CircleProps extends CircleItem {
  onCircleClick: (id: number, score: number) => void;
}

const useStyles = makeStyles({
  circle: ({ isVisible }: { isVisible: boolean }) => ({
    display: isVisible ? 'flex' : 'none',
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
    borderRadius: '100px',
    cursor: 'pointer',
  }),
});

export const Circle: VFC<CircleProps> = memo(({ id, color, score, isVisible, onCircleClick }) => {
  const classes = useStyles({
    isVisible,
  });

  return (
    <div className={classes.circle} style={{ backgroundColor: color }} onClick={() => onCircleClick(id, score)}></div>
  );
});
