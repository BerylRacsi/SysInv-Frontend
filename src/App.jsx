import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Drawer from './components/Drawer';
import {
	Box,
	Container,
	CssBaseline
} from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

	const { userInfo } = useSelector((state) => state.auth);
	const drawerWidth = 240;

	return (
		<>
			<CssBaseline />
			<ToastContainer />
			{userInfo
				?
				<>	
					<Drawer drawerWidth={drawerWidth}/>
					<Box sx={{ pt: 8, pb: 6 }}>
						<Container maxWidth="false"
							sx={{
								width: { md: `calc(100% - ${drawerWidth}px )`},
								ml: { md: 30},
								mt: 3,
							}}
						>
							<Outlet/>
						</Container>
					</Box>
				</>
				:
				<>
					<Header />
					<Outlet />
				</>
			}
		</>
	)
}

export default App
