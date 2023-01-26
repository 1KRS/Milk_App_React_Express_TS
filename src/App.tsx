import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home';
import ProductPage from './pages/Page';


function App() {

  return (
    <BrowserRouter>

        <Routes>
          <Route path='/' element={<HomePage />} >
            {/* <Route path=':id' element={<ProductPage product={product}/>} /> */}
          </Route>
        </Routes>

    </BrowserRouter>
  );
}

export default App;
