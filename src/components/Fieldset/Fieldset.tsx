import type { ReactNode } from "react";

import classes from "./Fieldset.module.css";

type Props = {
  legend: string;
  children: ReactNode;
};

const Fieldset = ({ legend, children }: Props) => {
  return (
    <fieldset className={classes.fieldset}>
      <legend className={classes.legend}>{legend}</legend>
      {children}
    </fieldset>
  );
};

export default Fieldset;
