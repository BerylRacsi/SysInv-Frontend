import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useLogoutMutation } from '../slices/userApiSlice';
import { logout } from '../slices/authSlice';
import {
    AppBar,
    Box,
    Collapse,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
} from '@mui/material';
import {
    AccessibleForward as AccessibleForwardIcon,
    AccountCircle as AccountCircleIcon,
    ExpandLess as ExpandLess,
    ExpandMore as ExpandMore,
} from '@mui/icons-material';

const Header = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);
    const [logoutApiCall] = useLogoutMutation();

    const handleProfile = () => {
        setAnchorEl(null);
        navigate('/profile');
    };

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

    const { window, drawerWidth } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Nested List Items
                    </ListSubheader>
                }
            >
                <ListItemButton onClick={() => { navigate('/') }}>
                    <ListItemIcon>
                        <AccessibleForwardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItemButton>
                <ListItemButton onClick={() => { navigate('/item') }}>
                    <ListItemIcon>
                        <AccessibleForwardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Item" />
                </ListItemButton>
                <ListItemButton onClick={() => { navigate('/user') }}>
                    <ListItemIcon>
                        <AccessibleForwardIcon />
                    </ListItemIcon>
                    <ListItemText primary="User" />
                </ListItemButton>
                <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                        <AccessibleForwardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <AccessibleForwardIcon />
                            </ListItemIcon>
                            <ListItemText primary="Starred" />
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
        <Box sx={{ display: 'flex' }}>
            <AppBar
                position="fixed"
                sx={{
                    width: { md: `calc(100% - ${drawerWidth}px)` },
                    ml: { md: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        onClick={handleDrawerToggle}    
                        aria-label="open drawer"
                        edge="start"
                        sx={{ mr: 2, display: { md: 'none' } }}
                    >
                        <AccessibleForwardIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        System
                    </Typography>
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
                        <MenuItem onClick={handleProfile}>Profile</MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>

            <Box
                component="nav"
                sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', md: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
        </>
    )
}

export default Header