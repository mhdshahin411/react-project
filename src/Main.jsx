import React from "react";

import Login1 from "./Login1";
import Register1 from "./Register1";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar1 from "./Navbar1";

function Main() {
  return (
    <div>
      <BrowserRouter>
        <Navbar1 />

        <Routes>
          <Route path="/Register1" element={<Register1 />} />
          <Route path="/login1" element={<Login1 />} />
          
        </Routes>


      </BrowserRouter>
    </div>
  );
}

export default Main;
