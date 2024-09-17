import React from "react";
import Header1 from "./Header1";
import Header2 from "./Header2";

const Layout = ({ children }) => {
  return (
    <>
      {/* Pass Header2 components to Header1 */}
      <Header1 header2={<Header2 />} />
      <div className="relative">
        {/* Render Header2 normally for PC mode */}
        <Header2 />
        {children}
      </div>
    </>
  );
};

export default Layout;
