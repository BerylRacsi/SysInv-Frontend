import { useNavigate } from 'react-router-dom';
import {
    AppBar,
    Box,
    Button,
    IconButton,
    Toolbar,
    Typography,
} from '@mui/material';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';

const Header = () => {
    const navigate = useNavigate();

    return (
        <>
            <AppBar position="static" sx={{mb: 3}}>
                <Toolbar>
                    <IconButton size="large" color="inherit" onClick={() => { navigate('/') }}>
                        <AccessibleForwardIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        System
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Button variant="outlined" color="inherit" edge="end" sx={{ mx: 1 }} onClick={() => { navigate('/login') }}>Login</Button>
                        <Button variant="outlined" color="inherit" edge="end" sx={{ mx: 1 }} onClick={() => { navigate('/register') }}>Register</Button>
                    </Box>
                    <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                        <IconButton size="large" color="inherit" onClick={() => { navigate('/login') }}>
                            <AccessibleForwardIcon />
                        </IconButton>
                        <IconButton size="large" color="inherit" onClick={() => { navigate('/register') }}>
                            <AccessibleForwardIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header