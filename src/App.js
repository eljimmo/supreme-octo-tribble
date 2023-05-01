import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from './pages/Home_page_index';
import AIPage from './pages/AI_Models';


export default function App() {
  return (
    <div>


      <BrowserRouter>
          <Routes>
            
            <Route path="/" element={<HomePage />} />

          

            

            {/* <Route path="/neuroevolution" element={<Welcome />} /> */}

            {/* <Route path="/MachineLearning" element={<Machine_page />} /> */}

            <Route path="/AImodels" element={<AIPage />} />

            {/* <Route path="/About" element={<AboutIndex />} /> */}

            {/* <Route path="/s" element={<StockSearch />} /> */}

            {/* <Route path="/Demo" element={<Dashboard />} /> */}

          
          </Routes>

        </BrowserRouter>

    </div>
  );
}

