import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { StateContext } from '../../context/StateProvider';
import OutlinedCard from '../utility/materialui/OutlinedCard';


const PublicPolls = () => {
    const [allPoll] = useContext(StateContext);
    const navigate = useNavigate();
    return (
        <div>
            <Box sx={{ width: '100%' }} mt={15}>
                <Typography variant="h4" sx={{ textAlign: 'center' }}>
                    Polls created by people for public opinions.
                </Typography>
            </Box>

            {
                allPoll.map(poll => (
                    <Box sx={{ width: '100%', cursor: 'pointer' }} mt={5} key={poll.id} onClick={() => navigate(`/poll/${poll.id}`)} >
                        <OutlinedCard poll={poll} key={poll.id} />
                    </Box>
                ))
            }


        </div >
    );
};

export default PublicPolls;