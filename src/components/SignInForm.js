import React from 'react';
import { Box, Button, Checkbox, FormControlLabel, TextField, Link as UiLink } from '@material-ui/core';
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

const SignInForm = () => {

  const classes = useStyles();

  return (
    <div className="SignInForm">
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
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Sign In
        </Button>

        <Box mb={2}>
          <UiLink component={Link} to="/forgot-password" variant="body2">
            Forgot password?
          </UiLink>
        </Box>
        <Box>
          <UiLink component={Link} to="sign-up" variant="body2">
            {'Don\'t have an account? Sign Up'}
          </UiLink>
        </Box>
      </form>
    </div>
  );
};

export default SignInForm;