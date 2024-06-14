/* eslint-disable react/prop-types */
import { OPTIONS } from "../../utils/constants";

export function Options({ onSelect, ...rest }) {
  return (
    <fieldset {...rest}>
      <legend>Select Names</legend>
      {OPTIONS.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            value={option}
            onChange={() => onSelect(option)}
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
}
