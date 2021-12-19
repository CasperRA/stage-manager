import * as React from "react";
import "../styles/global.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";

//components
import Navbar from "../components/Navbar";
import Roles from "./roles";
import FrontPage from "./FrontPage";
import Chat from "./chat";
import Calendar from "./calendar";

// markup
const IndexPage = () => {
  return (
    <BrowserRouter>
      <div className="navPageSize">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" exact element={<FrontPage />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
};

export default IndexPage;
