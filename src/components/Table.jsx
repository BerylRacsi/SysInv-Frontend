import {
    Box,
    CircularProgress,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Table = (props) => {

    const { records, columns } = props;
    const { data, error, isLoading, isError } = records;
    console.log('gogogo')
    // const navigate = useNavigate();

    // const errorHandler = (error) => {
    //     navigate(-1);
    //     toast.error(error?.data?.message || error.message);
    // }

    return (
        <>
            {isLoading
                ?
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress sx={{ mx: 'auto', mb: 6 }} />
                </Box>
                :
                // status === 'rejected' && error
                //     ?
                //     <Box sx={{ display: 'flex' }}>
                //         {errorHandler(error)}
                //     </Box>
                //     :
                isError
                    ?
                    <Box sx={{ display: 'flex' }}>
                        <h1>{error?.data?.message || error.message}</h1>
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