import Fieldset from "@/components/Fieldset/Fieldset";
import classes from "./LineHeight.module.css";

const LineHeight = () => {
  return (
    <>
      <Fieldset legend="Explanation">
        <p>
          Sets the height of text and is commonly used to set distance between
          multiple lines of text.
        </p>
        <p>
          line-height: 1.5; // For example, if fon size is 16px, then 1.5 * 16px
          = 24px
        </p>
        <p>Values: unitless, percentages, pixels, ems</p>
        <p>
          <strong>unitless</strong> is just a number that multiplies the font
          size of the element and is commonly used for line height. Children
          inherit the line height value, not the exact pixel size.
          <br />
          Other units are not commonly used for line height.
        </p>
      </Fieldset>
      <Fieldset legend="Example">
        <h2 className={classes["h2-example"]}>
          I'm baby marfa austin 90's, banjo art party kitsch hot chicken
          skateboard try-hard poutine small batch.
        </h2>
        <p className={classes["p-example"]}>
          Man bun vape ugh irony vexillologist pok pok retro affogato gentrify
          iPhone gluten-free williamsburg blackbird spyplane. Pitchfork kombucha
          hella, before they sold out man bun af occupy celiac ethical solarpunk
          adaptogen portland sartorial meditation. Cardigan live-edge organic
          cold-pressed synth, forage air plant la croix vinyl wolf cornhole.
        </p>
      </Fieldset>
      <Fieldset legend="Guidance">
        <p>
          Headings should be &lt;1.5 and regular text 1.5-2 to improve
          readability.
        </p>
        <p>
          It's generally a good idea to set the font weights even if they have
          default browser-set values.
        </p>
      </Fieldset>
    </>
  );
};

export default LineHeight;
