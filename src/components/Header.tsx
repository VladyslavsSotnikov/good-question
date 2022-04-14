import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  title: {
    textAlign: 'center',
    fontFamily: `'Noto Sans KR', sans-serif !important`,
    fontWeight: '700 !important',
  },
});

export const Header = () => {
  const classes = useStyles();

  return (
    <Typography variant='h3' className={classes.title}>
      Good question
    </Typography>
  );
};
