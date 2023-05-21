import {
  BrowserRouter, // should be single
  Routes, // can have multiple; even inside component but append "/*" in path of that compoent
  Route,
  Outlet,
} from "react-router-dom";
import WelcomePage from './pages/Welcome_page_index';
import AboutIndex from './pages/About';
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
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<WelcomePage />} />


          <Route path="/" element={<Layout />}>
           
          
            <Route path="about" element={<AboutIndex />} />

            {/* <Route path="accessibility" element={<AccessibilityIndex />} /> */}

            {/* <Route path="privacypolicies" element={<PrivacyPoliciesIndex />} /> */}

            {/* <Route path="generalterms" element={<GeneralTermsIndex />} /> */}

            {/* <Route path="datacollection" element={<DataCollectionIndex />} /> */}

            {/* <Route path="neuroevolution" element={<NeuroevolutionIndex />} /> */}

            {/* <Route path="machinelearning" element={<MachinelearningIndex />} /> */}
           
            {/* <Route path="artificialintelligence" element={<ArtificialIntelligenceIndex />} /> */}


          </Route>
        </Route>
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


