import React from "react";
import Header from "../../pages/Header";
import Footer from "./Footer";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
