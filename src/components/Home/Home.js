import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div>
            <Box sx={{ width: '100%' }} mt={15}>
                <Typography variant="h4" sx={{ textAlign: 'center' }}>
                    Create instant, and real time polls.
                </Typography>
                <Link to="/public" >Public</Link>
                <Link to="/" >Home</Link>
            </Box>
        </div>
    );
};

export default Home;