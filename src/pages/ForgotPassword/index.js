import React from 'react';
import { Avatar, Container, makeStyles, Typography } from '@material-ui/core';
import { PersonOutlineOutlined as PersonOutlineOutlinedIcon } from '@material-ui/icons';

import ForgotPasswordForm from '../../components/ForgotPasswordForm';
import './ForgotPassword.scss';

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

const ForgotPassword = () => {
  const classes = useStyles();

  return (
    <Container className="ForgotPassword" maxWidth="xs">
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