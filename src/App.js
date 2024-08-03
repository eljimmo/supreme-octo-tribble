import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import WelcomePage from './pages/Service_Index/Welcome_page_index';
import { AuthProvider } from '../src/contexts/AuthContext';
import DataCollectionIndex from "./pages/Service_Index/DataCollection";
import PrivacyPoliciesIndex from "./pages/Service_Index/Privacypolicies";
import AccessibilityIndex from "./pages/Service_Index/Accessibility";
import GeneralTermsIndex from "./pages/Service_Index/Generalterms";
import FleetOperationsHub from "./pages/Service_Index/FleetOperationsHub";
import SupportPage from "./pages/Service_Index/Support";
import ChooseUs from "./pages/Service_Index/WhyLeibniz";
import Login from "./pages/Service_Index/Login";
import Signup from "./pages/Service_Index/Signup";
import ControlPage from "./pages/ControlPage";
import DatabaseMain from "./components/Data/DataOutput/MainDataBasePage/Index"; 
// import DataPage from "./components/Data/DataOutput/DataTables/DataPage";
// import AssetAnalysis from "./pages/Service_Index/AssetAnalysis";
import PrivateRoute from "./pages/layout/PrivateRoute";
import FinancialControlPage from "./components/Data/DataOutput/FinancialControl/FinancialControlPage";


export default function App() {
  return (


    <BrowserRouter>
    <AuthProvider> 






    <div className="App bg-primary">
      <section>          
        <div>            
          <Routes>




          <Route path="/login" element={<Login/>}/>


          <Route path="/signup" element={<Signup/>}/>



          
          <Route exact path='/home' element={<PrivateRoute/>}>
                  <Route exact path='/home' element={<SupportPage/>} />
          </Route>







              <Route 
                path="/"
                element={
                    <WelcomePage/>
                }
              />




              <Route
                path="/home"
                element={
                  <WelcomePage/>
                }
              />

              

              <Route
                path="/control"
                element={
                  <ControlPage/>
                }
              />
         

                <Route
                path="/operations"
                element={
                  <FleetOperationsHub/>
                }
              />
              
              <Route
                path="/login"
                element={
                  <ChooseUs/>
                }
              />

              <Route
                path="/database"
                element={
                  <DatabaseMain/>
                }
              />


          <Route
                path="/FinancialControl"
                element={
                  <FinancialControlPage/>
                }
              />


          </Routes>          
        </div>
      </section>

    </div>
    
    </AuthProvider> 
  </BrowserRouter>
  );
}

