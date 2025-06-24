import { NavLink } from "react-router-dom";
import classes from "./NavbarItem.module.css";
import type { NavbarItemData } from "./types";

type Props = {
  itemData: NavbarItemData;
};

const NavbarItem = ({ itemData }: Props) => {
  return (
    <NavLink className={classes["navbar-item"]} to={itemData.link}>
      {itemData.text}
    </NavLink>
  );
};

export default NavbarItem;
