import {
  BrowserRouter, // should be single
  Routes, // can have multiple; even inside component but append "/*" in path of that compoent
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import HomePage from './pages/Home_page_index';
import AboutIndex from './pages/About';
import AccessibilityIndex from "./pages/Accessibility";
import PrivacyPoliciesIndex from "./pages/Privacypolicies";
import GeneralTermsIndex from "./pages/Generalterms";
import DataCollectionIndex from "./pages/DataCollection";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* In Home, use <Outlet /> to show children */}
        <Route path="/" element={<Layout />}>
          {/* index specifies default element */}
          <Route index element={<HomePage />} />


          <Route path="/" element={<AppPage />}>
           
          
            <Route path="about" element={<AboutIndex />} />

            <Route path="accessibility" element={<AccessibilityIndex />} />

            <Route path="privacypolicies" element={<PrivacyPoliciesIndex />} />

            <Route path="generalterms" element={<GeneralTermsIndex />} />

            <Route path="datacollection" element={<DataCollectionIndex />} />


           
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const Layout = () => {
  return (
    <div>
      <ol>
        <li>
          {/* <Link to="/">Home (/)</Link> */}
        </li>
        <li>
          <Link to="/About">About (/)</Link>
        </li>
        {/* <li>
          <Link to="/AI">AI (/)</Link>
        </li> */}
      </ol>
      {/* <h4>Home (/)</h4> */}
      <fieldset>
        {/* <legend>Selected page: (using &lt;Outlet /&gt;)</legend> */}
        <Outlet />
      </fieldset>
    </div>
  );
};



const AppPage = () => {
  return (
    <div>
      <ol>
        <li>
        <Link to="/About">About (/)</Link>

        </li>
      </ol>
      <fieldset>
        {/* <legend>Children routes (Outlets) </legend> */}
        <Outlet />
      </fieldset>
    </div>
  );
};

