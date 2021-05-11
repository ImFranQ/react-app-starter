import React from 'react';
import { Avatar, Container, Typography } from '@material-ui/core';
import { PersonOutlineOutlined as PersonOutlineOutlinedIcon } from '@material-ui/icons';

import ResetPasswordForm from '../../components/ResetPasswordForm';
import useStyles from './style';

const ResetPassword = () => {
  const classes = useStyles();

  return (
    <Container id="ResetPassword" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PersonOutlineOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          Reset password
        </Typography>

        <ResetPasswordForm />
      </div>
    </Container>
  );
};

export default ResetPassword;