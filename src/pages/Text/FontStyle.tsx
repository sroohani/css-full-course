import Fieldset from "@/components/Fieldset/Fieldset";
import classes from "./FontStyle.module.css";

const FontStyle = () => {
  return (
    <>
      <Fieldset legend="Explanation">
        <p>Sets the style of a font.</p>
        <p>font-style: italic;</p>
        <p>
          Values: normal (Default), italic, oblique, oblique at a specific angle
          (e.g. oblique 10deg)
        </p>
        <p>
          <h3>The difference between italic and oblique:</h3>
          Italic is a purpose-built font, which is actually selecting a specific
          variation of the font, whereas oblique will take a regular font and
          just slant it to the right. It's not a purpose-built font. It's
          applying rules to an existing regular font.
        </p>
      </Fieldset>
      <Fieldset legend="Example">
        <h1 className={classes["h1-example"]}>I'm baby marfa austin 90's</h1>
        <h2 className={classes["h2-example"]}>
          banjo art party kitsch hot chicken
        </h2>
        <p className={classes["p-example"]}>
          skateboard try-hard poutine small batch.
        </p>
      </Fieldset>
      <Fieldset legend="Guidance">
        <p>Can sometimes be used to draw attention.</p>
        <p>Still, using weight and color to draw attention is preferred.</p>
      </Fieldset>
    </>
  );
};

export default FontStyle;
