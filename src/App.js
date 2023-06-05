import {
  Routes,
  Route,
  BrowserRouter,
  Link,
  Navigate,
  Outlet
} from "react-router-dom";
import WelcomePage from './pages/Welcome_page_index';
// import AboutIndex from './pages/About';
// import AccessibilityIndex from "./pages/Accessibility";
// import PrivacyPoliciesIndex from "./pages/Privacypolicies";
// import GeneralTermsIndex from "./pages/Generalterms";
// import DataCollectionIndex from "./pages/DataCollection";
// import NeuroevolutionIndex from "./pages/Neuroevolution";
// import MachinelearningIndex from "./pages/MachineLearning";
// import ArtificialIntelligenceIndex from "./pages/ArtificialIntelligence";

export default function App() {
  return (
    <BrowserRouter>
          <MyMenu />


      <Routes>

      <Route path="/" element={<Public />} />
        <Route path="/private-outlet" element={<PrivateOutlet />}>
          <Route path="" element={<Private />} />
        </Route>

        <Route path="/" element={<Layout />}>

          <Route index element={<WelcomePage />} />


          <Route path="/" element={<Layout />}>

           
          
            {/* <Route path="about" element={<AboutIndex />} /> */}

            {/* <Route path="accessibility" element={<AccessibilityIndex />} /> */}

            {/* <Route path="privacypolicies" element={<PrivacyPoliciesIndex />} /> */}

            {/* <Route path="generalterms" element={<GeneralTermsIndex />} /> */}

            {/* <Route path="datacollection" element={<DataCollectionIndex />} /> */}

            {/* <Route path="neuroevolution" element={<NeuroevolutionIndex />} /> */}

            {/* <Route path="machinelearning" element={<MachinelearningIndex />} /> */}
           
            {/* <Route path="artificialintelligence" element={<ArtificialIntelligenceIndex />} /> */}


          </Route>
        </Route>
        <Route path="/login" element={<Login />} />

      </Routes>
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


const Public = () => <div>public</div>;
const Private = () => <div>private</div>;
const Login = () => <div>login</div>;


function PrivateOutlet() {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="/login" />;
}

function PrivateRoute({ children }) {
  const auth = useAuth();
  return auth ? children : <Navigate to="/login" />;
}

function useAuth() {
  return true;
}


function MyMenu() {
  return (
    <nav>
      <Link to="/">Public</Link>
      {" | "}
      <Link to="/private-nested">Private Using Nested</Link>
      {" | "}
      <Link to="/private-outlet">Private Using Outlet</Link>
    </nav>
  );
}