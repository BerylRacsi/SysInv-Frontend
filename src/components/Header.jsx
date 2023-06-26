import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import { 
    AppBar,
    Button,
    IconButton,
    Toolbar,
    Typography,
} from '@mui/material';

const Header = () => {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton size="large" color="inherit">
                        <AccessibleForwardIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{flexGrow: 1}}>
                        System
                    </Typography>
                    <Button variant="outlined" color="inherit" edge="end" sx={{mx: 1}}>Login</Button>
                    <Button variant="outlined" color="inherit" edge="end" sx={{mx: 1}}>Register</Button>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header