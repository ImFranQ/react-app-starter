import React from 'react';
import { Toolbar, Typography, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Menu as MenuIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const Topbar = ({ onMenuPressed }) => {
  const style = useStyles();

  return (
    <Toolbar>
      <IconButton edge="start" color="inherit" className={style.menuButton} onClick={onMenuPressed}>
        <MenuIcon />
      </IconButton>

      <Typography variant="h6">
        App Name
      </Typography>
    </Toolbar>
  );
};

export default Topbar;