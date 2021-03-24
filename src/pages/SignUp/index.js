import React from 'react';
import { Avatar, Container, makeStyles, Typography } from '@material-ui/core';
import { PersonOutlineOutlined as PersonOutlineOutlinedIcon } from '@material-ui/icons';

import SignUpForm from '../../components/SignUpForm';
import './SignUp.scss';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}));

const SignUp = () => {
  const classes = useStyles();

  return (
    <Container className="SignUp" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PersonOutlineOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>

        <SignUpForm />
      </div>
    </Container>
  );
};

export default SignUp;