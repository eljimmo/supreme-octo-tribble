import {
  Routes,
  Route,
  BrowserRouter,
  // Link,
  // Navigate,
  Outlet
} from "react-router-dom";
import WelcomePage from './pages/Welcome_page_index';
import Signup from './pages/Signup';
import Login from './pages/Login';
import LayoutView from './widgets/Layout';
import AboutIndex from './pages/About';
import Home from "./pages/Home";



export default function App() {
  return (


    <BrowserRouter>
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
                path="/home"
                element={
                  <LayoutView>
                    < Home />
                  </LayoutView>
                
                }
              />

              <Route 
                path="/timer"
                element={
                  <Layout>
                    {/* < Timer /> */}
                  </Layout>
                
                }
              />
              
              <Route 
                path="/stopwatch"
                element={
                  <Layout>
                    {/* < Stopwatch /> */}
                  </Layout>
                
                }
              />              
            
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>          
        </div>
      </section>

    </div>
  </BrowserRouter>
  );
}

const Layout = () => {
  return (
    <div>
      <fieldset>
        <Outlet />
      </fieldset>
    </div>
  );
};


// const Public = () => <div>public</div>;
// const Private = () => <div>private</div>;
// const Login = () => <div>login</div>;


// function PrivateOutlet() {
//   const auth = useAuth();
//   return auth ? <Outlet /> : <Navigate to="/login" />;
// }

// function PrivateRoute({ children }) {
//   const auth = useAuth();
//   return auth ? children : <Navigate to="/login" />;
// }

// function useAuth() {
//   return true;
// }


// function MyMenu() {
//   return (
//     <nav>
//       <Link to="/">Public</Link>
//       {" | "}
//       <Link to="/private-nested">Private Using Nested</Link>
//       {" | "}
//       <Link to="/private-outlet">Private Using Outlet</Link>
//     </nav>
//   );
// }