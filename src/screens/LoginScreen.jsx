import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    Avatar,
    Box,
    Button,
    CircularProgress,
    Container,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    TextField,
} from '@mui/material';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import { useLoginMutation } from '../slices/userApiSlice';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [login, { isLoading }] = useLoginMutation();

    const { userInfo } = useSelector((state) => state.auth);

    useEffect(() => {
        if (userInfo) {
            navigate('/dashboard');
        }
    }, [navigate, userInfo]);

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(useLoginMutation)
        try {
            const res = await login({ email, password }).unwrap();
            console.log(res);
            dispatch(setCredentials({ ...res }));

        } catch (error) {
            toast.error(error?.data?.message || error.message);
        }
    }

    return (
        <>
            <Box sx={{ pt: 8, pb: 6 }}>
                <Container maxWidth="sm">
                    <Card>
                        <Avatar sx={{ mx: 'auto', mt: 2 }}>
                            <AccessibleForwardIcon />
                        </Avatar>
                        <CardHeader title="Sign In" titleTypographyProps={{ variant: 'h4', align: 'center' }} />
                        <Box component="form" onSubmit={submitHandler}>
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

                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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

                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </CardContent>
                            {isLoading
                                ?
                                <Box sx={{ display: 'flex' }}>
                                    <CircularProgress sx={{ mx: 'auto' , mb: 6}} />
                                </Box>
                                :
                                <CardActions>
                                    <Button type='submit' variant="contained" color="primary" fullWidth sx={{ mx: 5, mb: 5 }}>
                                        Sign In
                                    </Button>
                                </CardActions>
                            }

                        </Box>
                    </Card>
                </Container>
            </Box>
        </>
    )
}

export default LoginScreen