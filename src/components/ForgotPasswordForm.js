import React from 'react';
import { Box, Button, TextField, Link as UiLink } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
  },
}));

const ForgotPasswordForm = () => {

  const classes = useStyles();

  return (
    <div className="ForgotPasswordForm">
      <form className={classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Reset password
        </Button>

        <Box mb={2}>
          <UiLink component={Link} to="/sign-in" variant="body2">
            {'I remember my password. Sign In'}
          </UiLink>
        </Box>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;