import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const CircularIndeterminate = () => {
  return (
    <Box className="loading-box" sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
};


export default  CircularIndeterminate;