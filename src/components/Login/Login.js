import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, FormControl, FormHelperText, IconButton, Input, InputAdornment, InputLabel, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {

    const { signInUsingGoogle } = useAuth();
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <Box sx={{ marginTop: '100px', marginLeft: 'auto', marginRight: 'auto' }}>
            <form>
                <FormControl>
                    <InputLabel htmlFor="standard-adornment-username">Username</InputLabel>
                    <Input id="standard-adornment-username" type='text' onChange={handleChange('username')} />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment=
                        {
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />

                </FormControl>
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                <Button variant="outlined" type="submit">Submit</Button>
            </form>
            <Typography>Or</Typography>
            <Button onClick={() => signInUsingGoogle()} variant="outlined">Google</Button>
        </Box >
    );
};

export default Login;