import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/routes';
import { Toaster } from 'react-hot-toast';
import 'react-day-picker/dist/style.css';
function App() {
  return (
    <div className='mx-5'>
     <RouterProvider router={router}>
      
     </RouterProvider>
     <Toaster/>
    </div>
  );
}

export default App;
