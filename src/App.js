import { RouterProvider } from 'react-router-dom';
import './App.css';
import { route } from './Routes/Routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div >
      <RouterProvider router={route}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
