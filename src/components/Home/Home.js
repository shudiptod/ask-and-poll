import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import banner from '../../images/homebanner.jpg';
const Home = () => {
    return (
        <div>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center' }} mt={15}>
                <Typography variant="h4" sx={{ textAlign: 'center' }}>
                    Create instant, and real time polls.
                </Typography>
                <Box sx={{ width: '60%', marginLeft: 'auto', marginRight: 'auto' }}>
                    <img src={banner} alt="polling banner" sx={{ width: '60%', height: "100px" }} loading="lazy" />
                </Box>

            </Box>
        </div>
    );
};

export default Home;