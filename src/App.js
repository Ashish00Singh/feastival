import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Navbar from './Component/Navbar';
import Latest_Bikes from './Component/Latest_Bikes';
import Latest_Car from './Component/Latest_Car';
import Tempalet from './Component/Tempalet';
import Loard_Krishna from './Component/Loard_Krishna';
import Upcoming_Festival from './Component/Upcoming_Festival';
import Aside from './Component/Aside';

function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <div className='row'>
          <div className='col-2'>
            <Aside/>
          </div>
          <div className='col-10'>
            <Routes>
              <Route path='Latest Bikes' element={Latest_Bikes()} />
              <Route path='Latest Car' element={Latest_Car()} />
              <Route path='L Krishna' element={Loard_Krishna()} />
              <Route path='Tempalet' element={Tempalet()} />
              <Route path='UpComing Fes' element={Upcoming_Festival()} />
            </Routes>
          </div>
        </div>
      </BrowserRouter></>
  );
}

export default App;
