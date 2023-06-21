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
// import AboutIndex from "./pages/About";
// import MachinePage from "./pages/Machine_Index";
import MachinelearningIndex from "./pages/MachineLearning";
import NeuroevolutionIndex from "./pages/Neuroevolution";



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
           
            <Route exact path='/home' element={<PrivateRoute/>}>
                <Route exact path='/home' element={<AboutIndex/>} />
            </Route>
            
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>

          </Routes>          
        </div>
      </section>

    </div>
    
    </AuthProvider> 
  </BrowserRouter>
  );
}

