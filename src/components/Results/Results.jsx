/* eslint-disable react/prop-types */
import css from "./Results.module.css";

import { RESULTS } from "../../utils/constants";

export default function Results({ disabled, ...rest }) {
  return (
    <ul className={css.Results} data-disabled={disabled} {...rest}>
      {RESULTS.map((result) => (
        <li className={css.Result} key={result.id}>
          {result.name}
        </li>
      ))}
    </ul>
  );
}
