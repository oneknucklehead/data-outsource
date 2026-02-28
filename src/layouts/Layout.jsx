// src/layouts/Layout.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Container from "../components/Container";
import gradBg from "../assets/gradBG.png";
const Layout = () => {
  return (
    <div className="">
      <img
        src={gradBg}
        alt=""
        aria-hidden="true"
        className="fixed inset-0 w-full h-full object-cover object-center -z-10 pointer-events-none"
      />
      <Navbar />

      <main className="relative">
        <Container>
          <Outlet />
        </Container>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
