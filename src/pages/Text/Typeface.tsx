import Fieldset from "@/components/Fieldset/Fieldset";
import classes from "./Typeface.module.css";
import { ExternalLink } from "lucide-react";

const Typeface = () => {
  return (
    <>
      <Fieldset legend="Explanation">
        <p>
          A <strong>typeface</strong> is just a fancy word for a specific font.
          A font features characters with consistent visual characteristics.
          Typefaces (fonts) are organized into groups:
        </p>
        <h3 className={classes["h3-serif"]}>Serif</h3>
        <p className={classes["p-serif"]}>
          Serif fonts have extra details on the end of strokes. For example,
          Times. These fonts have a classic feel and are used by brands to
          communicate luxury and reliability.
        </p>
        <h3 className={classes["h3-sans-serif"]}>Sans-Serif</h3>
        <p className={classes["p-sans-serif"]}>
          Sans-Serif fonts are known for straight ends and are much cleaner. For
          example, Arial. They have a modern and clean feel and are used by
          brands to communicate simplicity and clarity. These fonts are favorite
          among tech companies.
        </p>
        <h3 className={classes["h3-monospace"]}>Monospace</h3>
        <p className={classes["p-monospace"]}>
          In monospace fonts, letters are the same width. For example, Courier
          New. These fonts have a technical feel and are used by brands to
          communicate accuracy and precision. They are typically picked for very
          technical products.
        </p>
        <h3 className={classes["h3-cursive"]}>Cursive</h3>
        <p className={classes["p-cursive"]}>
          Cursive fonts have joining strokes or mimic handwriting. For example,
          Comic Sans MS{" "}
          <a href="https://www.1001fonts.com/cursive-fonts.html">
            <ExternalLink />
          </a>
          <a href="https://www.1001fonts.com/download/great-vibes.zip">
            <ExternalLink />
          </a>
          . These fonts are all about creating a personal feel and are used to
          connect with people on a more emotional level.
        </p>
        <h3 className={classes["h3-display"]}>Display</h3>
        <p className={classes["p-display"]}>
          Display fonts are designed to be attention grabbing and artistic. For
          example, Impact. This typeface has a creative feel and is used by
          brands to communicate playfulness and rule-breaking.
        </p>
      </Fieldset>
    </>
  );
};

export default Typeface;
