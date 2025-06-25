import Fieldset from "@/components/Fieldset/Fieldset";
import classes from "./FontFamily.module.css";

const FontFamily = () => {
  return (
    <>
      <Fieldset legend="Explanation">
        <p>
          Sets a prioritized list of font names (typefaces) or font categories.
        </p>
        <p>font-family: Tahoma, sans-serif;</p>
        <p>
          Here, Tahoma is our first choice, and if it's not available on the
          client, sans-serif is the fall-back option (the generic font group or
          the font category).
        </p>
        <p>
          We always end our font list with a font group as the fall-back in
          order to allow the browser to choose an installed font of that group.
        </p>
      </Fieldset>
      <Fieldset legend="Example">
        <h1 className={classes["h1-example"]}>This is a heading</h1>
      </Fieldset>
      <Fieldset legend="Guidance">
        <p>Play it safe and pick popular sans-serif fonts.</p>
        <p>
          Here are examples of some great sans-serif fonts to consider:
          <br />
          Roboto
          <br />
          Open Sans
          <br />
          Montserrat
          <br />
          Poppins
          <br />
          Inter
        </p>
        <p>Select one or two fonts, no more.</p>
      </Fieldset>
    </>
  );
};

export default FontFamily;
