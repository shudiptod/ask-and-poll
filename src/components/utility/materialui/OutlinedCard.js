import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);



export default function OutlinedCard(props) {
    return (
        <Box sx={{ width: '60%', margin: '5px auto' }}>
            <Card variant="outlined" sx={{ backgroundColor: 'rgb(25, 118, 210)' }} >
                <CardContent>
                    <Typography sx={{ fontSize: 15 }} color="white" gutterBottom>
                        {props.poll.votes} {bull} votes
                    </Typography>
                    <Typography variant="h5" component="div" sx={{ color: 'white' }}>
                        {props.poll.question}
                    </Typography>
                </CardContent>
            </Card>
        </Box >
    );
}
