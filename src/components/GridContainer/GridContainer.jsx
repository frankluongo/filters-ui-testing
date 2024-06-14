/* eslint-disable react/prop-types */

import css from "./GridContainer.module.css";

export function GridContainer({ children, ...rest }) {
  return (
    <div className={css.GridContainer} {...rest}>
      {children}
    </div>
  );
}
