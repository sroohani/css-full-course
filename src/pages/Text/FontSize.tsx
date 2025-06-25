import Fieldset from "@/components/Fieldset/Fieldset";
import typescaleImage from "@/assets/images/typescale.png";
import classes from "./FontSize.module.css";
import { ExternalLink } from "lucide-react";

const FontSize = () => {
  return (
    <>
      <Fieldset legend="Explanation">
        <p>Sets the size of the text.</p>
        <p>font-size: 16px;</p>
        <p>
          Values:
          <br />
          Absolute units - size is fixed and does not change in relation to
          parent elements:
          <br />
          <p>
            Commonly used: px
            <br />
            Uncommon: pt, in, cm, mm
          </p>
          Relative units - size is based on the size of a parent element and
          adjusts proportionally to changes in the parent element:
          <br />
          <p>percentages, ems, rems, vh, vw</p>
        </p>
        <p>
          A CSS <strong>pixel</strong> has a length of 1/96 (0.0104) inch.
        </p>
        <p>
          A <strong>type scale</strong> is a selection of type styles used
          across a product to ensure consistency
          <a
            href="https://m3.material.io/styles/typography/type-scale-tokens"
            target="_blank"
          >
            <ExternalLink />
          </a>
          . For example, we multiply/divide the base font size (usually 16px) by
          1.25 to get different font sizes for different elements in a
          hierarchical organized manner.
        </p>
      </Fieldset>
      <Fieldset legend="Example">
        <div className={classes["container"]}>
          <div className={classes["typescale-screenshot"]}>
            Using Typescale with "1.250 - Major Third"
            <a
              className={`classes["a-image"] a-standout`}
              href={typescaleImage}
              target="_blank"
            >
              <img
                src={typescaleImage}
                alt="typescale.com screenshot"
                width="200px"
              />
            </a>
          </div>
          <div className={classes["typescale-values"]}>
            Using slightly rounded Typescale-provided font sizes
            <p>
              62px - h1
              <br />
              48px - h2
              <br />
              40px - h3
              <br />
              32px - h4
              <br />
              24px - h5
              <br />
              20px - p<br />
              16px - a<br />
              12px - small
            </p>
          </div>
        </div>
      </Fieldset>
      <Fieldset legend="Guidance">
        <p>
          Regular text <em>should</em> be 16px-32px, and headings <em>can</em>{" "}
          be &gt; 60px.
        </p>
        <p>Anchor tags can have slightly smaller font sizes than 16px.</p>
        <p>
          Use a type-scale which provides a structured hierarchy of font sizes
          to create visual consistency and limits choices. A good tool for
          choosing type-scales is
          <a
            className="a-standout"
            href="https://typescale.com/"
            target="_blank"
          >
            typescale.com
          </a>
          .
        </p>
      </Fieldset>
    </>
  );
};

export default FontSize;
