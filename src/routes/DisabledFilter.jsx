import { useState } from "react";
import { Options } from "../components/Options/Options";

export function DisabledFilter() {
  const [disabled, setDisabled] = useState(false);

  return <Options onSelect={onSelect} disabled={disabled} />;

  async function onSelect(option) {
    console.log("selecting...", option);
    setDisabled(true);
    await new Promise((res) => setTimeout(res, 250));
    setDisabled(false);
  }
}
