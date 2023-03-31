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
import MyProSidebarProvider from "./components/Sidebar/MyProSidebar";
import Topbar from "./components/Topbar/Topbar";

// import { pathnames, AppTemplate, AuthProvider, AuthRoutes, MainMenu, PublicTemplate, ResetPassword, SignIn, SignUp, UserMenu, UserProfile, UserUpdateEmail, UserUpdateName, UserUpdatePassword, UserDelete, FireactProvider, ActionPages } from '@fireactjs/core';

import React from "react";




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
            
            <Route path="/signup" element={<Signup />} />
            <Route path="/auth-redirect" element={<Redirect />} />
            <Route path="/verification" element={<Verification />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Welcome />} />

            {/* <MyProSidebarProvider> */}
          {/* <div style={{ height: "100%", width: "100%" }}>
            <main> */}
              {/* <Topbar />
              <Routes> */}
                {/* <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/geography" element={<Geography />} /> */}
              {/* </Routes> */}
            {/* </main>
          </div> */}
        {/* </MyProSidebarProvider> */}


          </Routes>
        </AuthProvider>
      </BrowserRouter>

    </div>
  );
}
