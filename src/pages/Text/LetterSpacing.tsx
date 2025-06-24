import Fieldset from "@/components/Fieldset/Fieldset";
import classes from "./LetterSpacing.module.css";

const LetterSpacing = () => {
  return (
    <>
      <Fieldset legend="Explanation">
        <p>Sets the horizontal space between characters.</p>
        <p>letter-spacing: 8px;</p>
        <p>Values: pixels, percentages, ems</p>
        <p>
          <strong>pixels</strong> are most commonly used for letter spacing.
        </p>
        <p>
          <em>There is no uniless value for letter spacing.</em>
        </p>
      </Fieldset>
      <Fieldset legend="Example">
        <h2 className={classes["h2-example"]}>
          banjo art party kitsch hot chicken
        </h2>
        <p>skateboard try-hard poutine small batch.</p>
      </Fieldset>
      <Fieldset legend="Guidance">
        <p>
          We often apply small negative px value to headings to improve
          readability. This technique brings letters closer together and is
          known as tightening.
        </p>
      </Fieldset>
    </>
  );
};

export default LetterSpacing;
