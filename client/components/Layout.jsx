import { BrowserRouter, Routes, Route, Outlet , Link } from "react-router-dom";

function Layout() {
    return (
      <div style={{height:"100vh"}}>
        <div style={{background:"grey"}}>
          <Link to = "/">CompanyName</Link>{" "}
          <Link to = "/workout">workout</Link>{" "}
          <Link to = "/nutrition">nutrition</Link>{" "}
          <Link to = "/dashboard">dashboard</Link>
        </div>
        <div style={{height:"80vh" , background:"red"}}>
          <Outlet/>
        </div>
  
        <div>
        <footer style={{ background: "yellow" }}>Footer | Contact Us</footer>
        </div>
      </div>
    );
  }
  export default Layout;