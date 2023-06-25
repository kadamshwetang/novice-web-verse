import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login';
import Registration from './pages/registration';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        { <Route index element={<Home />} /> }
        
        <Route path="/login" element={<Login />} />
        <Route to="/register" element={<Registration />} />
        
        { <Route path="*" element={<NoPage />} /> }
      </Routes>
    </BrowserRouter>

  );
} 

export default App;