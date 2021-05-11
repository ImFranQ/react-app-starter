import React from 'react';
import { Avatar, Container, Typography } from '@material-ui/core';
import { PersonOutlineOutlined as PersonOutlineOutlinedIcon } from '@material-ui/icons';

import SignUpForm from '../../components/SignUpForm';
import useStyles from './style';

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