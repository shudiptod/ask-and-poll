import { Button, FormGroup, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const CreatePoll = () => {
    const [visibility, setVisibility] = useState('Public');

    const handleChangeVisibility = (event) => {
        setVisibility(event.target.value);
    };

    const [category, setCategory] = useState('Web Design');

    const handleChangeCategory = (event) => {
        setCategory(event.target.value);
    };
    return (
        <div>
            <FormGroup>
                <Box sx={{ width: '100%' }} mt={15}>
                    <Typography variant="h6" sx={{ textAlign: 'center' }}>
                        Create a poll.
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '60%', marginLeft: 'auto', marginRight: 'auto', marginTop: '1rem' }}>
                    <TextField sx={{ width: '100%' }} id="outlined-basic" label="Question" variant="outlined" />
                    <TextField sx={{ width: '100%', marginTop: '50px' }} id="outlined-basic" label="Option 1" variant="outlined" />
                    <TextField sx={{ width: '100%', marginTop: '10px' }} id="outlined-basic" label="Option 2" variant="outlined" />
                    <TextField sx={{ width: '100%', marginTop: '10px' }} id="outlined-basic" label="Option 3" variant="outlined" />
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

                        >
                            <MenuItem value={'Web Design'}>Web Design</MenuItem>
                            <MenuItem value={'Politics'}>Politics</MenuItem>
                        </Select>
                    </Box>
                </Box>
                <Button variant="contained" sx={{ width: '8%', margin: '50px auto ' }}>Create</Button>
            </FormGroup>
        </div>
    );
};

export default CreatePoll;