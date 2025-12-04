// src/layouts/Layout.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Container from "../components/Container";

const Layout = () => {
  return (
    // <div className="flex flex-col min-h-screen">
    <div className="">
      {/* Header */}
      <Navbar />
      {/* <AnimatePresence mode="wait"> */}
      {/* <motion.main
        key={location.pathname}
        className="flex-1 pt-20 overflow-hidden"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      > */}
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      {/* </motion.main> */}
      {/* </AnimatePresence> */}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
