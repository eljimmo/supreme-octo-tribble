import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Home } from "./pages/Home";
// import { Pricing } from "./pages/Pricing";
// import { Signup } from "./pages/Signup";
// import { Verification } from "./pages/Verification";
// import { Login } from "./pages/Login";
// import { PrivateRoute } from "./pages/PrivateRoute";
// import { AuthProvider } from "./contexts/Auth";
// import { Profile } from "./pages/Profile";
// import { ResetPassword } from "./pages/ResetPassword";
// import { Success } from "./pages/Success";
// import { Cancel } from "./pages/Cancel";
// import { Invoices } from "./pages/Invoices";
// import { Subscriptions } from "./pages/Subscriptions";
// import Redirect from "./pages/Redirect";
// import { Account } from "./pages/Account";
import Welcome from "./pages/index";
import React from "react";
// import Moksha from "./components/Moksha";
// import Neuro_scroll from "./components/ScrollControl/src/Neuro_Evo";
// import RTApp from "./components/Router_Transit/App";
// import Dashboard from "../src/views/Dashboard";
import Home_Page from './pages/Home_page_index';
// import Machine_page from './pages/Machine_Index';
// import AI_page from '../src/pages/AI_Models';
// import StockSearch from "./views/StockSearch/Stock_Search_Index";
import About_Index from "./pages/About";

export default function App() {
  return (
    <div>


      <BrowserRouter>
        {/* <AuthProvider> */}
          <Routes>


            {/* <Route
              path="/Home"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />

            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />

            <Route
              path="/reset-password"
              element={
                <PrivateRoute>
                  <ResetPassword />
                </PrivateRoute>
              }
            />
            <Route
              path="/pricing"
              element={
                <PrivateRoute>
                  <Pricing />
                </PrivateRoute>
              }
            />
            <Route
              path="/cancel"
              element={
                <PrivateRoute>
                  <Cancel />
                </PrivateRoute>
              }
            />
            <Route
              path="/success"
              element={
                <PrivateRoute>
                  <Success />
                </PrivateRoute>
              }
            />
            <Route
              path="/account"
              element={
                <PrivateRoute>
                  <Account />
                </PrivateRoute>
              }
            />
            <Route
              path="/subscriptions"
              element={
                <PrivateRoute>
                  <Subscriptions />
                </PrivateRoute>
              }
            />
            <Route
              path="/invoices"
              element={
                <PrivateRoute>
                  <Invoices />
                </PrivateRoute>
              }
            />
                  <Route
              path="/invoices"
              element={
                <PrivateRoute>
                  <Invoices />
                </PrivateRoute>
              }
            />
            <Route path="/signup" element={<Signup />} />
          
            <Route path="/auth-redirect" element={<Redirect />} />
            <Route path="/verification" element={<Verification />} />
          
            <Route path="/login" element={<Login />} /> */}
            
            <Route path="/" element={<Home_Page />} />


            

            {/* <Route path="/neuroevolution" element={<Welcome />} /> */}

            {/* <Route path="/MachineLearning" element={<Machine_page />} /> */}

            {/* <Route path="/AImodels" element={<AI_page />} /> */}

            <Route path="/About" element={<About_Index />} />

            {/* <Route path="/s" element={<StockSearch />} /> */}

            {/* <Route path="/Demo" element={<Dashboard />} /> */}

          
          
          </Routes>

        
        {/* </AuthProvider> */}
      </BrowserRouter>

    </div>
  );
}

