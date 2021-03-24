import React, { Fragment } from 'react';
import { SwipeableDrawer } from '@material-ui/core';

import SidebarMenu from './SidebarMenu';

const Sidebar = ({ show, onClose }) => {
  const onCloseHandler = () => {
    onClose ? onClose() : null;
  };

  const onOpenHandler = () => {
  };

  return (
    <Fragment key="left">
      <SwipeableDrawer anchor="left" open={show} onOpen={onOpenHandler} onClose={onCloseHandler}>
        <SidebarMenu />
      </SwipeableDrawer>
    </Fragment >
  );
};

export default Sidebar;