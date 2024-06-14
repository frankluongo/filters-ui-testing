/* eslint-disable react/prop-types */

import css from "./GridSidebar.module.css";

export function GridSidebar({ children, ...rest }) {
  return (
    <aside className={css.GridSidebar} {...rest}>
      {children}
    </aside>
  );
}
