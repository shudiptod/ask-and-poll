import React from 'react';
import './App.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import NavBar from './components/shared/NavBar/NavBar';
function App() {
  return (
    <div>
      <NavBar />
      <Box sx={{ width: '100%' }} mt={15}>
        <Typography variant="h4" sx={{ textAlign: 'center' }}>
          Create instant, and real time polls.
        </Typography>
      </Box>
    </div>
  );
}

export default App;
