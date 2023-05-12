import {
  BrowserRouter, // should be single
  Routes, // can have multiple; even inside component but append "/*" in path of that compoent
  Route,
  // Link,
  Outlet,
} from "react-router-dom";
import HomePage from './pages/Home_page_index';
// import AIPage from './pages/AI_Models';
// import AboutIndex from './pages/About';




export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* In Home, use <Outlet /> to show children */}
        <Route path="/" element={<Layout />}>
          {/* index specifies default element */}
          <Route index element={<HomePage />} />


          {/* app */}
          <Route path="/" element={<AppPage />}>
            {/* <Route index element={<AppAbout />} /> */}



            {/* displays below with best match of path; not based on sequence;
            so following will render only if other paths aren't matched */}
            {/* <Route path=":slug" element={<Other />} /> */}

            {/* relative path doesn't start with / */}
            {/* <Route path="AI" element={<AIPage />} /> */}
            {/* absolute path starts with /; if you want to pass full path */}
            {/* <Route path="/app/contact" element={<AppContact />} /> */}
            {/* <Route path="about" element={<AboutIndex />} /> */}

            {/* <Route
              path="redirect-me"
              element={<Navigate replace to="/app/about" />}
            /> */}
          </Route>
          {/* <Route path="*" element={<NotFound />} /> */}
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
        {/* <li>
          <Link to="/About">About (/)</Link>
        </li> */}
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
        </li>
      </ol>
      <fieldset>
        <legend>Children routes (Outlets) </legend>
        <Outlet />
      </fieldset>
    </div>
  );
};

