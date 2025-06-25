import Navbar from "@/components/Navbar/Navbar";
import classes from "./Header.module.css";
import Source from "@/components/Source/Source";
import { type NavbarItemData } from "@/components/Navbar/types";
import Text from "@/pages/Text/Text";

const mainNavbarItems: NavbarItemData[] = [
  {
    id: 0,
    text: "Text",
    link: "text",
    element: Text(),
  },
];

const Header = () => {
  return (
    <header className={classes.header}>
      <Source />
      <Navbar items={mainNavbarItems} />
    </header>
  );
};

export default Header;
