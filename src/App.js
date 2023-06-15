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
// import LayoutView from './widgets/Layout';
import AboutIndex from './pages/About';
// import Home from "./pages/Home";
import PrivateRoute from './PrivateRoute';
// import SignInSide from './components/Registration/signin';
import { AuthProvider } from '../src/contexts/AuthContext';
// import MarketNews from './pages/MarketNews';



export default function App() {
  return (


    <BrowserRouter>
    <AuthProvider> 

    <div className="App bg-primary">
      <section>          
        <div>            
          <Routes>

              <Route exact path='/home' element={<PrivateRoute/>}>
                <Route exact path='/home' element={<AboutIndex/>} />
             </Route>
         
              <Route 
                path="/"
                element={
                    <WelcomePage/>
                
                }
              />



              {/* <Route 
                path="/home"
                element={
                  <LayoutView>
                    < Home />
                  </LayoutView>
                
                }
              /> */}


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
    </AuthProvider> 

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