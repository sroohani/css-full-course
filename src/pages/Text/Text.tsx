import type { NavbarItemData } from "@/components/Navbar/types";
import Navbar from "@/components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import FontWeight from "./FontWeight";
import TextDecoration from "./TextDecoration";
import FontStyle from "./FontStyle";
import TextTransform from "./TextTransform";
import ListStyle from "./ListStyle";
import TextAlign from "./TextAlign";
import LineHeight from "./LineHeight";
import LetterSpacing from "./LetterSpacing";
import FontSize from "./FontSize";

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
  {
    text: "Text Align",
    link: "text-align",
    element: <TextAlign />,
  },
  {
    text: "Line Height",
    link: "line-height",
    element: <LineHeight />,
  },
  {
    text: "Letter Spacing",
    link: "letter-spacing",
    element: <LetterSpacing />,
  },
  {
    text: "Font Size",
    link: "font-size",
    element: <FontSize />,
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
export {
  FontWeight,
  TextDecoration,
  FontStyle,
  TextTransform,
  ListStyle,
  TextAlign,
  LineHeight,
  LetterSpacing,
  FontSize,
};
