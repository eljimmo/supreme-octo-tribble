import {
  Routes,
  Route,
  BrowserRouter,
  // Link,
  // Navigate,
  // Outlet
} from "react-router-dom";
import WelcomePage from './pages/Service_Index/Welcome_page_index';
import Signup from './pages/Signup';
import Login from './pages/Login';
import AboutIndex from './pages/Service_Index/About';
import PrivateRoute from './PrivateRoute';
import { AuthProvider } from '../src/contexts/AuthContext';
import ArtificialIntelligenceIndex from './pages/Service_Index/ArtificialIntelligence';
import MachinelearningIndex from "./pages/Service_Index/MachineLearning";
import NeuroevolutionIndex from "./pages/Service_Index/Neuroevolution";
import Pagenotfound from "./pages/Service_Index/Pagenotfound";
// import RoutingApp from './views/StockSearch/Testing/RoutingApp';
// import Indexapp from "./views/StockSearch/Testing/RoutingTests/Index";


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

              {/* <Route
                path="/stocksearch"
                element={
                  <RoutingApp/>
                }
              /> */}
              
              <Route 
                path="/about"
                element={
                    <AboutIndex/>
                }
              />

            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>

            <Route exact path='/home' element={<PrivateRoute/>}>
                <Route exact path='/home' element={<Pagenotfound/>} />

            </Route>

            <Route exact path='/portfolio' element={<PrivateRoute/>}>
                <Route exact path='/portfolio' element={<Pagenotfound/>} />

            </Route>


            {/* <Route exact path='/dashboard' element={<PrivateRoute/>}>
                <Route exact path='/dashboard' element={<NewDashboard/>} />

            </Route> */}



          </Routes>          
        </div>
      </section>

    </div>
    
    </AuthProvider> 
  </BrowserRouter>
  );
}

