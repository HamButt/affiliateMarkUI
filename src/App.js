import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from '../src/Home'
// import Hoodies from './Hoodies'
import Dashboard from './dashboard'
import Watches from './Watches'
import { PrimeReactProvider } from 'primereact/api';

function App() {
  return (
    <PrimeReactProvider>
      <BrowserRouter>
        <Routes>
          <Route exact element={<Home/>} path='/' />
          <Route exact element={<Watches/>} path='/men-watches' />
          {/* <Route exact element={<Hoodies/>} path='/hoodies' /> */}
          <Route exact element={<Dashboard/>} path='/user-dashboard' />
        </Routes>
      </BrowserRouter>
    </PrimeReactProvider>
  );
}

export default App;
