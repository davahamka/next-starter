import React from "react";
import Head from "./Head";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <style jsx global>{`
        body {
          margin: 0;
        }
      `}</style>

      <Head title="Start app" />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
