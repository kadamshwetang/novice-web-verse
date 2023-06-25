import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './login';
import Registration from './registration';


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