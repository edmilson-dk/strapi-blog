import { Fragment } from "react";
import Nav from "./nav";

const Layout = ({ children, categories, seo }) => (
  <Fragment>
    <Nav categories={categories} />
    {children}
  </Fragment>
);

export default Layout;