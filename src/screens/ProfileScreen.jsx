import { useEffect, useState } from 'react';
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
import { useUpdateUserMutation } from '../slices/userApiSlice';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';


const ProfileScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const dispatch = useDispatch();

    const [updateProfile, { isLoading }] = useUpdateUserMutation();

    const { userInfo } = useSelector((state) => state.auth);

    useEffect(() => {
        setName(userInfo.name);
        setEmail(userInfo.email);
    }, [userInfo.email, userInfo.name]);

    const submitHandler = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.error('Passwords do not match');
        } else {
            try {
                const res = await updateProfile({
                    _id: userInfo._id,
                    name,
                    email,
                    password,
                }).unwrap();
                console.log(res);
                dispatch(setCredentials(res));
                toast.success('Profile updated successfully');
            } catch (error) {
                toast.error(error?.data?.message || error.message);
            }
        }
    }

    return (
        <>
            <Container maxWidth="sm">
                <Card>
                    <Avatar sx={{ mx: 'auto', mt: 2 }}>
                        <AccessibleForwardIcon />
                    </Avatar>
                    <CardHeader title="Profile" titleTypographyProps={{ variant: 'h4', align: 'center' }} />
                    <Box component="form" onSubmit={submitHandler}>
                        <CardContent sx={{ mx: {sm: 5} }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="Name"
                                name="name"
                                autoFocus

                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"

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

                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="confirm-password"
                                label="Confirm Password"
                                type="password"
                                id="confirm-password"

                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </CardContent>
                        {isLoading
                            ?
                            <Box sx={{ display: 'flex' }}>
                                <CircularProgress sx={{ mx: 'auto', mb: 6 }} />
                            </Box>
                            :
                            <CardActions>
                                <Button type='submit' variant="contained" color="primary" fullWidth sx={{ mx: 5, mb: 5 }}>
                                    Update Profile
                                </Button>
                            </CardActions>
                        }

                    </Box>
                </Card>
            </Container>

        </>
    )
}

export default ProfileScreen