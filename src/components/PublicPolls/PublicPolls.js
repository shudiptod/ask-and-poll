import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const PublicPolls = () => {
    return (
        <div>
            <Box sx={{ width: '100%' }} mt={15}>
                <Typography variant="h4" sx={{ textAlign: 'center' }}>
                    Polls created by people for public opinions.
                </Typography>
            </Box>
        </div>
    );
};

export default PublicPolls;