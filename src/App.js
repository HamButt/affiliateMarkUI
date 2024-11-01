import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from '../src/Home'
// import Hoodies from './Hoodies'
import Dashboard from './dashboard'
import { PrimeReactProvider } from 'primereact/api';

function App() {
  return (
    <PrimeReactProvider>

      <BrowserRouter>
        <Routes>
          <Route exact element={<Home/>} path='/' />
          {/* <Route exact element={<Hoodies/>} path='/hoodies' /> */}
          <Route exact element={<Dashboard/>} path='/user-dashboard' />
        </Routes>
      </BrowserRouter>
    </PrimeReactProvider>
  );
}

export default App;
