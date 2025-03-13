import React from 'react';
import { Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Dashboard />
      </Box>
    </Box>
  );
}

export default App;
