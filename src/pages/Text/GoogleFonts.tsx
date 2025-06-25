import Fieldset from "@/components/Fieldset/Fieldset";
import classes from "./GoogleFonts.module.css";
import { ExternalLink } from "lucide-react";

const GoogleFonts = () => {
  return (
    <>
      <Fieldset legend="Explanation">
        <p>
          These fonts are available online and do not rely on the fonts
          installed on an individual user's device.
        </p>
        Google fonts are very easy to add to your projects:
        <ol>
          <li>
            Find the font you like{" "}
            <a href="https://fonts.google.com/">
              <ExternalLink />
            </a>
          </li>
          <li>Embed the font with a link tag in HTML</li>
          <li>Add the font family in CSS</li>
        </ol>
      </Fieldset>
      <Fieldset legend="Example">
        <h2 className={classes["h2-google-fonts"]}>Google Fonts - Inter</h2>
        <h2 className={classes["h2-default-font"]}>Default Font</h2>
      </Fieldset>
    </>
  );
};

export default GoogleFonts;
