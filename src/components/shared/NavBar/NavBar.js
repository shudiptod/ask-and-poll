import React, { useEffect } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { ThemeColorPalette, ThemeController, ThemeTogglerButton, useThemeType } from 'react-material-ui-theme';



const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function NavBar() {

    const { user } = useAuth();
    console.log(user);
    const navigate = useNavigate();
    const [themeType] = useThemeType();
    useEffect(() => {
        console.log(themeType);
    }, [themeType])
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="fixed"  >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link to="/" sx={{ textDecoration: 'none' }}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, textDecoration: 'none', display: { xs: 'none', md: 'flex' } }}
                        >
                            Poll BD
                        </Typography>
                    </Link>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >


                            <Link to="/public" underline="none" sx={{ textDecoration: 'none' }}>
                                <MenuItem key="public" onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">Public Polls</Typography>
                                </MenuItem>
                            </Link>
                            <Link to="/create" underline="none" sx={{ textDecoration: 'none' }}>
                                <MenuItem key="create" onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">Create poll</Typography>
                                </MenuItem>

                            </Link>


                            <ThemeController />

                        </Menu>
                    </Box>
                    <Link to="/" sx={{ textDecoration: 'none' }}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                            Poll BD
                        </Typography>
                    </Link>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Link to="/public" underline="none" sx={{ textDecoration: 'none' }}>
                            <Button
                                key="public"
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Public Polls
                            </Button>
                        </Link>
                        <Link to="/create" underline="none" sx={{ textDecoration: 'none' }}>
                            <Button
                                key="create"
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Create Poll
                            </Button>
                        </Link>

                        <ThemeController defaultthememode="light" />

                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        {
                            user.email ?
                                <>
                                    <Tooltip title="Open settings">
                                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                            <Avatar alt={user.displayName} src={user.photoURL} />
                                        </IconButton>
                                    </Tooltip>
                                    <Menu
                                        sx={{ mt: '45px' }}
                                        id="menu-appbar"
                                        anchorEl={anchorElUser}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={Boolean(anchorElUser)}
                                        onClose={handleCloseUserMenu}
                                    >
                                        {settings.map((setting) => (
                                            <MenuItem key={setting} onClick={handleCloseNavMenu}>
                                                <Typography textAlign="center">{setting}</Typography>
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </>
                                :
                                <>
                                    <Button onClick={() => navigate('/login')}><Typography sx={{ color: 'white' }} >Login</Typography></Button>
                                </>

                        }

                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
}

export default NavBar;


