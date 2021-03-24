import React from 'react';
import { Toolbar, AppBar, Typography, Container, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Menu as MenuIcon } from '@material-ui/icons';
import './Welcome.scss';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

function Welcome() {

  const style = useStyles();

  return (
    <div className="Welcome">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" className={style.menuButton}>
            <MenuIcon />
          </IconButton>

          <Typography variant="h6">
            Welcome
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        Welcome works
      </Container>
    </div>
  );
}

export default Welcome;
