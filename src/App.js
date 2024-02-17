import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Pricing from './Pages/Pricing';
import ProductionPage from './Pages/ProductionPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      
   
      <Route path="/pricing" element={<Pricing/>}/>
      
      <Route path="/chatbot" element={<ProductionPage/>}/>
     {/* <Route path="/options" element={<Tasks/>}/>
      <Route path="/track" element={<Track/>}/>}
      <Route path="/category" element={<CreateCategory/>}/>
  <Route path="/listing" element={<CreateCommon/>}/>*/}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
