import React from "react";
import Home from "./Home";
import Shop from "./Shop";
import About from "./About";
import Blog from "./Blog"
import Contact from "./Contact";
import Pages from "./Pages"

import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";

  const RouteNav = () =>{
    return(
<div>
    <BrowserRouter>
    <Routes>
        <Route path = "/Home" element = {<Home />} />
        <Route path = "/Shop" element = {<S}
    </Routes>
    </BrowserRouter>
</div>
    )
  }

  export default RouteNav