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
import Typeface from "./Typeface";
import FontFamily from "./FontFamily";
import GoogleFonts from "./GoogleFonts";

const textNavbarItems: NavbarItemData[] = [
  {
    id: 0,
    text: "Font Weight",
    link: "font-weight",
    element: <FontWeight />,
  },
  {
    id: 1,
    text: "Text Decoration",
    link: "text-decoration",
    element: <TextDecoration />,
  },
  {
    id: 2,
    text: "Font Style",
    link: "font-style",
    element: <FontStyle />,
  },
  {
    id: 3,
    text: "Text Transform",
    link: "text-transform",
    element: <TextTransform />,
  },
  {
    id: 4,
    text: "List Style",
    link: "list-style",
    element: <ListStyle />,
  },
  {
    id: 5,
    text: "Text Align",
    link: "text-align",
    element: <TextAlign />,
  },
  {
    id: 6,
    text: "Line Height",
    link: "line-height",
    element: <LineHeight />,
  },
  {
    id: 7,
    text: "Letter Spacing",
    link: "letter-spacing",
    element: <LetterSpacing />,
  },
  {
    id: 8,
    text: "Font Size",
    link: "font-size",
    element: <FontSize />,
  },
  {
    id: 9,
    text: "Typeface",
    link: "typeface",
    element: <Typeface />,
  },
  {
    id: 10,
    text: "Font Family",
    link: "font-family",
    element: <FontFamily />,
  },
  {
    id: 11,
    text: "Google Fonts",
    link: "google-fonts",
    element: <GoogleFonts />,
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
  Typeface,
  FontFamily,
  GoogleFonts,
};
