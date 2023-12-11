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
import Howitworks from "./pages/Service_Index/How";
import SupportPage from "./pages/Service_Index/Support";
import ChooseUs from "./pages/Service_Index/WhyLeibniz";
import Login from "./pages/Service_Index/login";
import Signup from "./pages/Service_Index/Signup";

export default function App() {
  return (


    <BrowserRouter>
    <AuthProvider> 




{/* 
    <Routes>
      
            <Route path="/signup" element={<Signup/>}/>
    
    
            <Route path="/login" element={<Login/>}/>

    </Routes> */}



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


                <Route path="/login" element={<Login/>}/>


                <Route path="/signup" element={<Signup/>}/>

              <Route
                path="/support"
                element={
                  <SupportPage/>
                }
              />

              

              <Route
                path="/datacollection"
                element={
                  <DataCollectionIndex/>
                }
              />
              

              
              <Route
                path="/privacypolicies"
                element={
                  <PrivacyPoliciesIndex/>
                }
              />


                <Route
                path="/accessibility"
                element={
                  <AccessibilityIndex/>
                }
              />


                <Route
                path="/generalterms"
                element={
                  <GeneralTermsIndex/>
                }
              />

                <Route
                path="/howitworks"
                element={
                  <Howitworks/>
                }
              />
              
              <Route
                path="/chooseus"
                element={
                  <ChooseUs/>
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

