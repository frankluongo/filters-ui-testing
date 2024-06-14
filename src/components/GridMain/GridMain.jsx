/* eslint-disable react/prop-types */
import css from "./GridMain.module.css";

export function GridMain({ children, ...rest }) {
  return (
    <div className={css.GridMain} {...rest}>
      {children}
    </div>
  );
}
