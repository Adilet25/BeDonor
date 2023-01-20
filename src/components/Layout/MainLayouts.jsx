import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const MainLayouts = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-[70vh]">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayouts;
