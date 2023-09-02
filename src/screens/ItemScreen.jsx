import Table from '../components/Table';
import { useGetItemsQuery } from '../slices/itemApiSlice';

const ItemScreen = () => {
    const records = useGetItemsQuery();

    const columns = [
        { field: '_id', headerName: 'ID', width: 255 },
        { field: 'name', headerName: 'Name', width: 255 },
        { field: 'unit', headerName: 'Unit', width: 255 },
        { field: 'impa', headerName: 'IMPA', width: 255 },
    ]

    return (
        <>
            <Table records={records} columns={columns} />
        </>
    )
}

export default ItemScreen