// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import React from "react";
import HomePage from './pages/Home_page_index';
import AIPage from './pages/AI_Models';


import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink
} from 'react-router-dom';


function App() {
  return (
<div className="App">
<Router>
    {/* <Navbar /> */}
    <Routes>
    <Route exact path='/' element={<HomePage />} />
    <Route path='/AImodels' element={<AIPage />} />
    {/* <Route path='/Login' element={<Login />} /> */}
    </Routes>
</Router>
</div>
   
  );
}

export default App;


// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <nav>
//           <ul>
//             <li><NavLink exact to="/" activeClassName="selected">Home</NavLink></li>
//             <li><NavLink to="/AImodels" activeClassName="selected">Contact</NavLink></li>
//           </ul>
//         </nav>
//         <Routes>
//           <Route path="/AImodels">
//             <AIPage />
//           </Route>
//           <Route path="/" element={<HomePage />} /> 
//           <Route path="/AImodels" element={<AIPage />} />


//             {/* <HomePage /> */}
//           {/* </Route> */}
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;




// export default function App() {
//   return (
//     <div>


//       <BrowserRouter>
//           <Routes>
            
//             <Route path="/" element={<HomePage />} />

          

            

//             {/* <Route path="/neuroevolution" element={<Welcome />} /> */}

//             {/* <Route path="/MachineLearning" element={<Machine_page />} /> */}

//             <Route path="/AImodels" element={<AIPage />} />

//             {/* <Route path="/About" element={<AboutIndex />} /> */}

//             {/* <Route path="/s" element={<StockSearch />} /> */}

//             {/* <Route path="/Demo" element={<Dashboard />} /> */}

          
//           </Routes>

//         </BrowserRouter>

//     </div>
//   );
// }

