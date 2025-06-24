import Fieldset from "@/components/Fieldset/Fieldset";
import classes from "./TextDecoration.module.css";

const TextDecoration = () => {
  return (
    <>
      <Fieldset legend="Explanation">
        <p>Sets decorative lines on text.</p>
        <p>
          text-decoration: &lt;LINE_VALUE&gt; [COLOR_VALUE] [STYLE_VALUE]
          <br />
          text-decoration: underline blue dotted;
        </p>
        <p>
          Line values: line-through, underline (Default for anchor elements),
          overline, none (Default for most elements)
          <br />
          Color values: Named, Hex, RGB
          <br />
          Style values: double, dotted, solid (Default), wavy, dashed
        </p>
      </Fieldset>
      <Fieldset legend="Example">
        <h1 className={classes["h1-example"]}>I'm baby marfa austin 90's</h1>
        <h2 className={classes["h2-example"]}>
          Banjo art party Kitsch hot chicken
        </h2>
        <p className={classes["p-example"]}>skateboard try-hard </p>
        <a
          className={classes["a-example"]}
          href="https://www.google.com/"
          target="_blank"
        >
          poutine small batch.
        </a>
      </Fieldset>
      <Fieldset legend="Guidance">
        <p>
          Always remove underline from anchor tags and very rarely use
          text-decoration. Style with weight and color instead.
        </p>
      </Fieldset>
    </>
  );
};

export default TextDecoration;
