import Fieldset from "@/components/Fieldset/Fieldset";
import classes from "./FontWeight.module.css";

const FontWeight = () => {
  return (
    <>
      <Fieldset legend="Explanation">
        <p>Sets the thickness of text characters.</p>
        <p>font-weight: bold;</p>
        <p>
          Values: 100, 200, 300, 400 (Normal, default for most text), 500
          (Medium), 600, 700 (Bold, default for headings), 800, 900
          <br />
        </p>
      </Fieldset>
      <Fieldset legend="Example">
        <h1 className={classes["h1-example"]}>I'm baby marfa austin 90's</h1>
        <h2>banjo art party kitsch hot chicken</h2>
        <p className={classes["p-example"]}>
          skateboard try-hard poutine small batch.
        </p>
      </Fieldset>
      <Fieldset legend="Guidance">
        <p>Headings should be 500-900 and other text 300-400.</p>
        <p>
          It's generally a good idea to set the font weights even if they have
          default browser-set values.
        </p>
      </Fieldset>
    </>
  );
};

export default FontWeight;
