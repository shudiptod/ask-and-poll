import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@mui/material';
import React, { useContext, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StateContext } from '../../context/StateProvider';

const SinglePoll = () => {
    const formRef = useRef();
    const buttonRef = useRef();

    const { id } = useParams();
    const [allPoll] = useContext(StateContext);

    const poll = allPoll[id - 1]

    const [value, setValue] = useState(poll.option1)
    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (value === poll.option1) {
            poll.option1Count = parseInt(poll.option1Count) + 1;
        }
        else {
            poll.option2Count = parseInt(poll.option2Count) + 1;
        }
        poll.votes = parseInt(poll.votes) + 1;

        setSubmitted(true);
        buttonRef.disabled = true;
    };

    return (
        <Box sx={{
            width: '80%', margin: '100px auto',
            display: 'flex', flexDirection: 'row', justifyContent: 'space-between'
        }}>
            <Box sx={{ width: '30%', margin: '5px auto', textAlign: 'center', padding: '20px 0px', border: 'blue solid 1px', }}>
                <Typography>
                    {poll.question}
                </Typography>
                <form onSubmit={handleSubmit} ref={formRef}>
                    <FormControl>

                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={value}
                            onChange={handleChange}
                        >
                            <FormControlLabel value={poll.option1} control={<Radio />} label={poll.option1} />
                            <FormControlLabel value={poll.option2} control={<Radio />} label={poll.option2} />
                        </RadioGroup>
                        {submitted ?
                            <Button color='primary' type="submit" sx={{ border: 'blue solid 1px', marginTop: '10px', width: 'max-content' }} disabled >Submit</Button>
                            :
                            <Button color='primary' type="submit" sx={{ border: 'blue solid 1px', marginTop: '10px', width: 'max-content' }} >Submit</Button>
                        }
                    </FormControl>

                </form>
            </Box>
            {
                submitted ?
                    <Box sx={{ width: '30%', }}>
                        <Typography>
                            Total Votes: {poll.votes}
                        </Typography>
                        <Typography>
                            {poll.option1}:{poll.option1Count} votes
                        </Typography>
                        <Typography>
                            {poll.option2}:{poll.option2Count} votes
                        </Typography>
                    </Box>
                    :
                    <>
                    </>
            }
        </Box>
    );
};

export default SinglePoll;