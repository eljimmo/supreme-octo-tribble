import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from './pages/Home_page_index';


export default function App() {
  return (
    <div>


      <BrowserRouter>
          <Routes>
            
            <Route path="/" element={<HomePage />} />

          
          
          </Routes>

        </BrowserRouter>

    </div>
  );
}

