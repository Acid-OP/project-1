import { BrowserRouter, Routes, Route, Outlet , Link } from "react-router-dom";
import Layout from "../components/Layout";
import Landing from "./landing";
import Workout from "./workout";
import Nutrition from "./nutrition";
import Dashboard from "./dashboard";
import ErrorPage from "./errorpage";
function Parent() {
    return (
      <div>
      <BrowserRouter>
        <Routes>
          {/* Wrap routes with Layout */}
          <Route path="/" element={<Layout />}>
            <Route path="/" element = {<Landing/>}/>
            <Route path="/workout" element={<Workout />} /> {/* Default route */}
            <Route path="/nutrition" element={<Nutrition />} /> {/* Default route */}
            <Route path="/dashboard" element={<Dashboard />} /> {/* Default route */}
            <Route path="*" element={<ErrorPage />} />
          </Route>
  
        </Routes>
      </BrowserRouter>
  
      </div>
    );
  }

// Layout Component for Navbar + Outlet

  


  



export default Parent;  