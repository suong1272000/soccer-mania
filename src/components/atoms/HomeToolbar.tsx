import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box } from '@mui/material';
import Title from './Labels/title/Title';
import ImgBox from './imgBox/ImgBox';

const drawerWidth = 240;

const HomeToolbar = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
        }}
      >
        <Toolbar sx={{ display: 'flex', gap: '10px' }}>
          <ImgBox url="/logo.png" width="60px" height="60px" radius="50%" />
          <Title title="맨체스터 유나이티드" />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default HomeToolbar;
