// import React from 'react'

import classes from "./Navbar.module.css";
import NavbarItem from "./NavbarItem";
import type { NavbarItemData } from "./types";

type Props = {
  items: NavbarItemData[];
};

const Navbar = ({ items }: Props) => {
  return (
    <nav className={classes.navbar}>
      {items.map((item) => (
        <NavbarItem itemData={item} />
      ))}
    </nav>
  );
};

export default Navbar;
