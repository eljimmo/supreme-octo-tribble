import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Pricing } from "./pages/Pricing";
import { Signup } from "./pages/Signup";
import { Verification } from "./pages/Verification";
import { Login } from "./pages/Login";
import { PrivateRoute } from "./pages/PrivateRoute";
import { AuthProvider } from "./contexts/Auth";
import { Profile } from "./pages/Profile";
import { ResetPassword } from "./pages/ResetPassword";
import { Success } from "./pages/Success";
import { Cancel } from "./pages/Cancel";
import { Invoices } from "./pages/Invoices";
import { Subscriptions } from "./pages/Subscriptions";
import Redirect from "./pages/Redirect";
import { Account } from "./pages/Account";
import Welcome from "./pages/index";
import Sidebar from "./components/Sidebar";
import React from "react";
import { Outlet } from "react-router-dom";


function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      {/* This element will render either <DashboardMessages> when the URL is
          "/messages", <DashboardTasks> at "/tasks", or null if it is "/"
      */}
      <Outlet />
    </div>
  );
}


function DashboardMessages() {
  return (
    <div>
      <h1>DashboardMessages</h1>

      {/* This element will render either <DashboardMessages> when the URL is
          "/messages", <DashboardTasks> at "/tasks", or null if it is "/"
      */}
      <Outlet />
    </div>
  );
}



function DashboardTasks() {
  return (
    <div>
      <h1>DashboardTasks</h1>

      {/* This element will render either <DashboardMessages> when the URL is
          "/messages", <DashboardTasks> at "/tasks", or null if it is "/"
      */}
      <Outlet />
    </div>
  );
}

export default function App() {
  return (
    <div>


      <BrowserRouter>
        <AuthProvider>
          <Routes>


            <Route
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
          
            <Route path="/login" element={<Login />} />
            
            <Route path="/" element={<Welcome />} />
            



          {/* <Route path="/Dashboard" element={
          <Sidebar>
          <Dashboard />
          </Sidebar>
          }>
        
          <Route
          path="messages"
          element={<DashboardMessages />}
          />

          <Route path="tasks" element={<DashboardTasks />} />
      
          </Route> */}
    
          
          
          </Routes>

        
        </AuthProvider>
      </BrowserRouter>

    </div>
  );
}

