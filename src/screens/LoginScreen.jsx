import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import {
    Avatar,
    Box,
    Button,
    Container,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    TextField,
} from '@mui/material';

const LoginScreen = () => {
    return (
        <>
            <Box sx={{ pt: 8, pb: 6 }}>
                <Container maxWidth="sm">
                    <Card>
                        <Avatar sx={{ mx: 'auto', mt: 2 }}>
                            <AccessibleForwardIcon />
                        </Avatar>
                        <CardHeader title="Sign In" titleTypographyProps={{ variant: 'h4', align: 'center' }} />
                        <CardContent sx={{ mx: 5 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" color="primary" fullWidth sx={{ mx: 5, mb: 5 }}>
                                Sign In
                            </Button>
                        </CardActions>
                    </Card>
                </Container>
            </Box>
        </>
    )
}

export default LoginScreen