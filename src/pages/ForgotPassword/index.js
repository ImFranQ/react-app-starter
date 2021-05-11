import React from 'react';
import { Avatar, Container, Typography } from '@material-ui/core';
import { PersonOutlineOutlined as PersonOutlineOutlinedIcon } from '@material-ui/icons';

import ForgotPasswordForm from '../../components/ForgotPasswordForm';
import useStyles from './style';

const ForgotPassword = () => {
  const classes = useStyles();

  return (
    <Container id="ForgotPassword" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PersonOutlineOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          Forgot password
        </Typography>

        <ForgotPasswordForm />
      </div>
    </Container>
  );
};

export default ForgotPassword;