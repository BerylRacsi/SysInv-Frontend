import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import CssBaseline from '@mui/material/CssBaseline';

function App() {

  return (
    <>
      <CssBaseline />
      <Header />
      <Outlet />
    </>
  )
}

export default App
