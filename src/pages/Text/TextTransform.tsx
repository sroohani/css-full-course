import Fieldset from "@/components/Fieldset/Fieldset";
import classes from "./TextTransform.module.css";

const TextTransform = () => {
  return (
    <>
      <Fieldset legend="Explanation">
        <p>Sets the capitalization of text</p>
        <p>text-transform: uppercase;</p>
        <p>
          Values: none (Default), uppercase, lowercase, capitalize (The first
          letter of each word)
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
        <p>
          Stick with the sentence case, meaning the first letter of the first
          word of a sentence is uppercase.
        </p>
        <p>
          Bloggers, edgy brands and studios will sometimes use uppercase to
          create a larger visual impact and appear more daring.
        </p>
      </Fieldset>
    </>
  );
};

export default TextTransform;
