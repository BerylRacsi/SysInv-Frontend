import { useState, useEffect } from 'react';
import {
    Button,
    Typography
} from '@mui/material';
import { useGetItemsQuery } from '../slices/itemApiSlice';

const DashboardScreen = () => {
    const [name, setName] = useState('');

    const { data, error, isLoading } = useGetItemsQuery();

    console.log(data)
    return (
        <>
            {data && data.map((item) => (
                <Typography variant="h6" key={item._id}>
                    {item.name}
                </Typography>
            ))}
            <Typography variant="h6" >
                Dashboard
            </Typography>
        </>
    )
}

export default DashboardScreen