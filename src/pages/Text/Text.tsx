import type { NavbarItemData } from "@/components/Navbar/types";
import Navbar from "@/components/Navbar/Navbar";
import FontWeight from "./FontWeight";
import TextDecoration from "./TextDecoration";
import FontStyle from "./FontStyle";
import TextTransform from "./TextTransform";
import ListStyle from "./ListStyle";
import { Outlet } from "react-router-dom";

const textNavbarItems: NavbarItemData[] = [
  {
    text: "Font Weight",
    link: "font-weight",
    element: <FontWeight />,
  },
  {
    text: "Text Decoration",
    link: "text-decoration",
    element: <TextDecoration />,
  },
  {
    text: "Font Style",
    link: "font-style",
    element: <FontStyle />,
  },
  {
    text: "Text Transform",
    link: "text-transform",
    element: <TextTransform />,
  },
  {
    text: "List Style",
    link: "list-style",
    element: <ListStyle />,
  },
];

const Text = () => {
  return (
    <section style={{ margin: "2rem auto" }}>
      <Navbar items={textNavbarItems} /> <Outlet />
    </section>
  );
};

export default Text;
