import Table from '../components/Table';
import { useGetUsersQuery } from '../slices/userApiSlice';

const UserScreen = () => {
    const records = useGetUsersQuery();
    console.log('lesgo')
    console.log(records)

    const columns = [
        { field: '_id', headerName: 'ID', width: 255 },
        { field: 'name', headerName: 'Name', width: 255 },
        { field: 'email', headerName: 'Email', width: 255 },
    ]

    return (
        <>
            <Table records={records} columns={columns} /> 
        </>
    )
}

export default UserScreen