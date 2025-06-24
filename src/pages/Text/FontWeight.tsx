import Fieldset from "@/components/Fieldset/Fieldset";
import "./FontWeight.module.css";

const FontWeight = () => {
  return (
    <>
      <Fieldset legend="Explanation">
        <p>Sets the thickness of text characters</p>
        <p>font-weight: bold;</p>
        <p>
          Values: 100, 200, 300, 400 (Normal, default for most text), 500
          (Medium), 600, 700 (Bold, default for headings), 800, 900
          <br />
        </p>
      </Fieldset>
      <Fieldset legend="Example">
        <h1 className="example">I'm baby marfa austin 90's</h1>
        <h2>banjo art party kitsch hot chicken</h2>
        <p className="example">skateboard try-hard poutine small batch.</p>
      </Fieldset>
      <Fieldset legend="Guidance">
        <p>Heading should be 500-900 and other text 300-400</p>
      </Fieldset>
    </>
  );
};

export default FontWeight;
