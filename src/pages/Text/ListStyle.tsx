import Fieldset from "@/components/Fieldset/Fieldset";
import classes from "./ListStyle.module.css";

const ListStyle = () => {
  return (
    <>
      <Fieldset legend="Explanation">
        <p>Sets the style of a list</p>
        <p>list-style: disc;</p>
        <p>
          Values: none, disc (Default for unordered lists), circle, square,
          decimal (Default for ordered lists)
        </p>
      </Fieldset>
      <Fieldset legend="Example">
        <ul className={classes["ul-example-1"]}>
          <li>I'm baby marfa austin 90's</li>
          <li>banjo art party kitsch hot chicken</li>
          <li>skateboard try-hard poutine small batch.</li>
        </ul>
        <ul className={classes["ul-example-2"]}>
          <li>I'm baby marfa austin 90's</li>
          <li>banjo art party kitsch hot chicken</li>
          <li>skateboard try-hard poutine small batch.</li>
        </ul>
        <ul className={classes["ul-example-3"]}>
          <li>I'm baby marfa austin 90's</li>
          <li>banjo art party kitsch hot chicken</li>
          <li>skateboard try-hard poutine small batch.</li>
        </ul>
      </Fieldset>
      <Fieldset legend="Guidance">
        <p>
          Always set list-style to none when they are used for structural
          purposes (e.g. navigation bars)
        </p>
      </Fieldset>
    </>
  );
};

export default ListStyle;
