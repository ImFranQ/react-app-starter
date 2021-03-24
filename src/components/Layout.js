import React, { useState } from 'react';
import { AppBar, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Topbar from './Topbar';
import Sidebar from './Sidebar';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  }
}));

const Layout = ({ children }) => {
  const style = useStyles();
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="Layout">
      <AppBar position="static">
        <Topbar onMenuPressed={() => setShowSidebar(true)} />
      </AppBar>

      <Container maxWidth="lg" className={style.container}>
        {children}
      </Container>

      <Sidebar show={showSidebar} onClose={() => setShowSidebar(false)} />
    </div>
  );
};

export default Layout;