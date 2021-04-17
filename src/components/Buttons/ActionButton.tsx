import { Button, makeStyles } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import * as React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    marginTop: theme.spacing(2),
    width: theme.spacing(16)
  },
  text: {
    fontFamily: 'Karla',
    fontWeight: 700,
    textTransform: 'none'
  },
  icon: {
    padding: theme.spacing(1),
    marginTop: theme.spacing(2),
    width: theme.spacing(4.9),
    minWidth: theme.spacing(1),
    paddingLeft: theme.spacing(2.5)
  },
  circle: {
    borderRadius: theme.spacing(3)
  },
  iconLoader: {
    padding: theme.spacing(1),
    marginTop: theme.spacing(2),
    width: theme.spacing(4.9),
    minWidth: theme.spacing(1)
  }
}));

export interface IActionButtonProps {
  text: string;
  link?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick?: () => void;
  circle?: boolean;
  loading?: boolean;
}

const ActionButton: React.FC<IActionButtonProps> = ({
  text,
  link = '',
  startIcon = null,
  endIcon = null,
  onClick,
  circle,
  loading
}) => {
  const classes = useStyles();
  const buttonType = text === undefined ? classes.icon : classes.root;
  const loaderType = text === undefined ? classes.iconLoader : classes.root;

  const loader = (
    <CircularProgress color="secondary" size="1.5rem"></CircularProgress>
  );

  const className = circle
    ? `${buttonType} ${classes.circle}`
    : `${buttonType}`;

  const loaderClassName = circle
    ? `${loaderType} ${classes.circle}`
    : `${loaderType}`;

  if (loading)
    return (
      <Button
        className={loaderClassName}
        variant="contained"
        color="primary"
        size="large"
        href={link}
        target="_blank"
        onClick={onClick}
      >
        {loader}
      </Button>
    );

  return (
    <Button
      className={className}
      variant="contained"
      color="primary"
      size="large"
      startIcon={startIcon}
      endIcon={endIcon}
      href={link}
      target="_blank"
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default ActionButton;
