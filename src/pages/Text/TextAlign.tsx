import Fieldset from "@/components/Fieldset/Fieldset";
import classes from "./TextAlign.module.css";

const TextAlign = () => {
  return (
    <>
      <Fieldset legend="Explanation">
        <p>Specifies the horizontal alignment of the text within an element.</p>
        <p>text-align: center;</p>
        <p>Values: left (Default), center, right, justify</p>
        <p>
          <br />
          <strong>left</strong> is generally considered easier for paragraphs of
          text.
          <br />
          <strong>center</strong> is often used for headings and shorter pieces
          of text.
          <br />
          <strong>justify</strong> causes every line in a paragraph to take the
          full width of the containing box.
        </p>
        <p>
          <em>
            This property has no impact on the text inside inline elements.
          </em>
        </p>
      </Fieldset>
      <Fieldset legend="Example">
        <h2 className={classes["h2-example"]}>
          I'm baby marfa austin 90's, banjo art party kitsch hot chicken
          skateboard try-hard poutine small batch.
        </h2>
        <h3 className={classes["h3-example"]}>
          Trust fund tonx JOMO, taiyaki snackwave church-key chicharrones
          pour-over umami big mood.
        </h3>
        <h4 className={classes["h4-example"]}>
          Retro chia gentrify williamsburg fingerstache roof party ascot,
          raclette meditation raw denim etsy chillwave dreamcatcher.
        </h4>
        <p className={classes["p-example"]}>
          Man bun vape ugh irony vexillologist pok pok retro affogato gentrify
          iPhone gluten-free williamsburg blackbird spyplane. Pitchfork kombucha
          hella, before they sold out man bun af occupy celiac ethical solarpunk
          adaptogen portland sartorial meditation. Cardigan live-edge organic
          cold-pressed synth, forage air plant la croix vinyl wolf cornhole.
        </p>
        <a
          className={classes["a-example"]}
          href="https://www.google.com/"
          target="_blank"
        >
          Marfa
        </a>
      </Fieldset>
      <Fieldset legend="Guidance">
        <p>
          Don't justify text. Long blocks of text should be left-aligned. Do not
          center large blocks of text.
        </p>
      </Fieldset>
    </>
  );
};

export default TextAlign;
