import { TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const CreatePoll = () => {
    return (
        <div>
            <Box sx={{ width: '100%' }} mt={15}>
                <Typography variant="h6" sx={{ textAlign: 'center' }}>
                    Create a poll.
                </Typography>
            </Box>
            <div>
                <TextField id="outlined-basic" label="title" variant="outlined" />
            </div>
        </div>
    );
};

export default CreatePoll;