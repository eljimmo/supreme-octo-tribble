import Dashboard from "./views/Dashboard.js";
import Machine_Learning_Layout from "./views/Machine_Learning_Index";
import Artificial_Layout from "./views/Artificial_Int";
import Portfolio_Layout from "./views/Portfolio.js";
import TableList from "./views/TableList.js";
import Typography from "./views/Typography.js";
import UserProfile from "./views/UserProfile.js";
// import logo from "assets/img/math_graph.png";

var routes = [
  {
    path: "/dashboard",
    name: "Analytics Control Panel",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/machinelearning",
    name: "Machine Learning",
    icon: "",
    component: Machine_Learning_Layout,
    layout: "/admin"
  },
  {
    path: "/artificialintelligence",
    name: "Artificial Intelligence",
    icon: "",
    component: Artificial_Layout,
    layout: "/admin"
  },
  {
    path: "/portfolio",
    name: "Portfolio & Watchlist",
    icon: "",
    component: Portfolio_Layout,
    layout: "/admin"
  },
  {
    path: "/user-account",
    name: "User Account",
    icon: "",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/savedmodels",
    name: "Saved Models",
    icon: "",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/settings",
    name: "Settings",
    icon: "",
    component: Typography,
    layout: "/admin"
  },
];
export default routes;
