import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Home } from '@material-ui/icons';

const useStyles = makeStyles({
  list: {
    width: 300,
  },
});

const list = [
  {
    icon: Home,
    title: 'Home'
  }
];

const Menu = () => {
  const style = useStyles();

  return (
    <div className={style.list}>
      <List>
        {list.map(item => (
          <ListItem button key={item.title}>
            <ListItemIcon>
              <Icon component={item.icon} />
            </ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Menu;