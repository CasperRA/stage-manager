import * as React from "react";
import "../styles/global.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";

//components
import Navbar from "../components/Navbar";
import RolesPage from "./RolesPage";
import FrontPage from "./FrontPage";
import ChatPage from "./ChatPage";

// markup
const IndexPage = () => {
  return (
    <BrowserRouter>
      <div className="navPageSize">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" exact element={<FrontPage />} />
        <Route path="/roles" element={<RolesPage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default IndexPage;
