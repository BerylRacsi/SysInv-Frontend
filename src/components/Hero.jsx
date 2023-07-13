import { useNavigate } from 'react-router-dom';
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

const Hero = () => {

    const navigate = useNavigate();

    return (
        <main>
            <Container maxWidth="md">
                <Card sx={{pb: 5}}>
                    <CardHeader title="Welcome" titleTypographyProps={{variant: 'h3', align: 'center'}} />

                    <CardContent>
                        <Typography variant="h6" align='center' paragraph sx={{ mx: { sm: 10}, typography: { sm: 'body1', xs: 'body2' } }}>
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
        </main>
    )
}

export default Hero