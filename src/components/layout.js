import React from "react";
import Footer from "./footer.js";

function Layout(props) {
  const children = props.children;
  return (
    <React.Fragment>
      {/* Header */}
      {children}
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
