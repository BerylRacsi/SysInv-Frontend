import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLogoutMutation } from '../slices/userApiSlice';
import { logout } from '../slices/authSlice';
import {
    AppBar,
    Button,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
} from '@mui/material';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const { userInfo } = useSelector((state) => state.auth);
    const [anchorEl, setAnchorEl] = useState(null);
    const [logoutApiCall] = useLogoutMutation();

    const handleLogout = async () => {
        setAnchorEl(null);
        try {
            await logoutApiCall().unwrap();
            dispatch(logout());
            navigate('/login');
        } catch (error) {
            console.error(error);
        }
    };
    
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton size="large" color="inherit" onClick={() => { navigate('/') }}>
                        <AccessibleForwardIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        System
                    </Typography>
                    {userInfo ? (
                        <>
                            <IconButton
                                size="small"
                                color="inherit"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                            >
                                <AccountCircleIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleLogout}>Logout</MenuItem>
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Button variant="outlined" color="inherit" edge="end" sx={{ mx: 1 }} onClick={() => { navigate('/login') }}>Login</Button>
                            <Button variant="outlined" color="inherit" edge="end" sx={{ mx: 1 }} onClick={() => { navigate('/register') }}>Register</Button>
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header