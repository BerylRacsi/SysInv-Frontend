import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import CssBaseline from '@mui/material/CssBaseline';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <CssBaseline />
      <Header />
      <ToastContainer/>
      <Outlet />
    </>
  )
}

export default App
