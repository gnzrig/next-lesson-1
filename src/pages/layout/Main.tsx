import React, { ReactNode } from "react";
import Footer from "./Footer";
import Left from "./Left";
import Top from "./Top";

interface LayoutProps {
  children: ReactNode;
}

const Main = ({ children }: any) => {
  return (
    <div>
      <Top />
      <Left />
      <Footer />
    </div>
  );
};

export default Main;
