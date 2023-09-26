// components/Layout.js

import Footer from "./Footer";
import Navigation from "./Navigation";

const Layout = ({ children }: any) => {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
