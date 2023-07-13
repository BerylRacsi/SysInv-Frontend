import {
    Box,
    CircularProgress,
    Typography,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useGetItemsQuery } from '../slices/itemApiSlice';

const Table = () => {

    const { data, error, isLoading } = useGetItemsQuery();

    const columns = [
        { field: '_id', headerName: 'ID', width: 255 },
        { field: 'name', headerName: 'Name', width: 255 },
        { field: 'unit', headerName: 'Unit', width: 255 },
        { field: 'impa', headerName: 'IMPA', width: 255 },
    ]

    return (
        <>
            {isLoading
                ?
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress sx={{ mx: 'auto', mb: 6 }} />
                </Box>
                :
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        getRowId={(row) => row._id}
                        rows={data}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 5,
                                },
                            },
                        }}
                        pageSizeOptions={[5]}
                        checkboxSelection
                        disableRowSelectionOnClick
                    />
                </div>
            }
        </>
    )
}

export default Table