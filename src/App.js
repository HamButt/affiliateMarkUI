import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from '../src/Home'
import Baby from './Baby'
import { PrimeReactProvider } from 'primereact/api';

function App() {
  return (
    <PrimeReactProvider>

    <BrowserRouter>
      <Routes>
        <Route exact element={<Home/>} path='/' />
        <Route exact element={<Baby/>} path='/baby-collection' />
      </Routes>
    </BrowserRouter>
    </PrimeReactProvider>
  );
}

export default App;
