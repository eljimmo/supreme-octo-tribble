import {
  Routes,
  Route,
  BrowserRouter,
  // Link,
  // Navigate,
  // Outlet
} from "react-router-dom";
import WelcomePage from './pages/Welcome_page_index';
import Signup from './pages/Signup';
import Login from './pages/Login';
import AboutIndex from './pages/About';
import PrivateRoute from './PrivateRoute';
import { AuthProvider } from '../src/contexts/AuthContext';
import ArtificialIntelligenceIndex from './pages/ArtificialIntelligence';
import Home from './pages/Home';
// import AboutIndex from "./pages/About";
// import MachinePage from "./pages/Machine_Index";
import MachinelearningIndex from "./pages/MachineLearning";
import NeuroevolutionIndex from "./pages/Neuroevolution";
// import MarketNews from "./pages/Coins_Data";
import MarketNews from "./pages/MarketNews";



export default function App() {
  return (


    <BrowserRouter>
    <AuthProvider> 

    <div className="App bg-primary">
      <section>          
        <div>            
          <Routes>

              <Route 
                path="/"
                element={
                    <WelcomePage/>
                }
              />
              

              <Route 
                path="/neuroevolution"
                element={
                    <NeuroevolutionIndex/>
                }
              />


              <Route 
                path="/machinelearning"
                element={
                    <MachinelearningIndex/>
                }
              />
              
              <Route 
                path="/artificialintelligence"
                element={
                    <ArtificialIntelligenceIndex/>
                }
              /> 
              
              <Route 
                path="/about"
                element={
                    <AboutIndex/>
                }
              />

            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>

            <Route exact path='/home' element={<PrivateRoute/>}>
                {/* <Route exact path='/home' element={<Home/>} /> */}
                <Route exact path='/home' element={<MarketNews/>} />

            </Route>

            {/* <Route exact path='/' element={<PrivateRoute/>}>
                <Route exact path='/' element={<MarketNews/>} />
             </Route> */}
            


            {/* <Route exact path='/MarketNews' element={<PrivateRoute/>}>
                <Route exact path='/MarketNews' element={<MarketNews/>} />
             </Route> */}

          </Routes>          
        </div>
      </section>

    </div>
    
    </AuthProvider> 
  </BrowserRouter>
  );
}

