import { Button, FormGroup, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext, useState } from 'react';
import { StateContext } from '../../context/StateProvider';


const CreatePoll = () => {

    const [allPoll, createNewPoll] = useContext(StateContext);
    let poll = {
        'question': '',
        'option1': '',
        'option2': '',
        'visibility': '',
        'category': '',
        'votes': 0,
        'option1Count': 0,
        'option2Count': 0
    };
    const [visibility, setVisibility] = useState('Public');

    const handleChangeVisibility = (event) => {
        setVisibility(event.target.value);
    };

    const [category, setCategory] = useState('Web Design');

    const handleChangeCategory = (event) => {
        setCategory(event.target.value);
    };





    const handleSubmit = (e) => {
        e.preventDefault();
        const ques = document.getElementById('question').name;
        const quesValue = document.getElementById('question').value;
        const option1 = document.getElementById('option1').name;
        const option1Value = document.getElementById('option1').value;
        const option2 = document.getElementById('option2').name;
        const option2Value = document.getElementById('option2').value;

        poll[ques] = quesValue;
        poll[option1] = option1Value;
        poll[option2] = option2Value;
        poll['visibility'] = visibility;
        poll['category'] = category;
        console.log(poll);
        createNewPoll(poll);
        document.getElementById("create-form").reset();
        ;

    }
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)} id="create-form">
                <FormGroup >
                    <Box sx={{ width: '100%' }} mt={15}>
                        <Typography variant="h6" sx={{ textAlign: 'center' }}>
                            Create a poll.
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '60%', marginLeft: 'auto', marginRight: 'auto', marginTop: '1rem' }}>
                        <TextField sx={{ width: '100%' }} id="question" label="Question" variant="outlined" name="question" required />
                        <TextField sx={{ width: '100%', marginTop: '50px' }} id="option1" label="Option 1" variant="outlined" name="option1" required />
                        <TextField sx={{ width: '100%', marginTop: '10px' }} id="option2" label="Option 2" variant="outlined" name="option2" required />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '60%', marginLeft: 'auto', marginRight: 'auto', marginTop: '50px' }}>
                        <Box sx={{ width: '40%' }}>
                            <InputLabel id="demo-simple-select-label">Visibility</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={visibility}
                                label="Visibility"
                                sx={{ width: '100%' }}
                                onChange={handleChangeVisibility}
                                name="visibility"
                            >
                                <MenuItem value={'Public'}>Public</MenuItem>
                                <MenuItem value={'Private'}>Private</MenuItem>
                            </Select>
                        </Box>
                        <Box sx={{ width: '40%' }}>
                            <InputLabel id="demo-simple-select-label">Category</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={category}
                                label="Category"
                                sx={{ width: '100%' }}
                                onChange={handleChangeCategory}
                                name="category"

                            >
                                <MenuItem value={'Web Design'}>Web Design</MenuItem>
                                <MenuItem value={'Politics'}>Politics</MenuItem>
                            </Select>
                        </Box>
                    </Box>
                    <Button variant="contained" sx={{ width: '8%', margin: '50px auto ' }} type="submit">Create</Button>
                </FormGroup>
            </form>
        </div>
    );
};

export default CreatePoll;