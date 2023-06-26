import {
    Box,
    Button,
    Container,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Hero = () => {

    const navigate = useNavigate();

    return (
        <main>
            <Box sx={{ pt: 8, pb: 6 }}>
                <Container maxWidth="md">
                    <Card sx={{pb: 5}}>
                        <CardHeader title="Welcome" titleTypographyProps={{variant: 'h3', align: 'center'}} />

                        <CardContent>
                            <Typography variant="h6" align='center' paragraph sx={{ mx: 10 }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Box sx={{ m: 'auto', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', columnGap: 2 }}>
                                <Button variant="contained" color="primary" size="large" onClick={() => {navigate('/login')}}>
                                    Sign In
                                </Button>
                                <Button variant="contained" color="primary" size="large" onClick={() => {navigate('/register')}}>
                                    Sign Up
                                </Button>
                            </Box>
                        </CardActions>
                    </Card>
                </Container>
            </Box>
        </main>
    )
}

export default Hero