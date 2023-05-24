import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import "../../Assets/Admin/css/layout.css";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  return (
    <div
      className={!sidebarToggle ? "sb-nav-fixed" : "sb-nav-fixed sb-sidenav-toggled"}
    >
      <Navbar toggle={sidebarToggle} setToggle={setSidebarToggle} />

      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Sidebar />
        </div>

        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4" >
              <div class="container pt-4">
                <section>
                  <h1 className="text-center p-2 mb-2">DATACOM <img src="https://img.freepik.com/free-vector/letter-c-computer_1308-83159.jpg?size=626&ext=jpg" width="50" style={{ borderRadius: '20px' }} alt="" /> </h1>
                </section>
                <Outlet />
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
      <script>

      </script>
    </div>
  );
};

export default AdminLayout;
