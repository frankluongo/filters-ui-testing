import { useState } from "react";
import { StoreInterface } from "../entities/StoreInterface";
import { Progress } from "../components/Progress/Progress";

import { DELAY } from "../utils/constants";
import { Options } from "../components/Options/Options";

const store = new StoreInterface();

export function DelayedFilter() {
  const [canAnimate, setCanAnimate] = useState(false);
  const [progress, setProgress] = useState(0);

  return (
    <>
      <Options onSelect={onSelect} />
      <Progress
        data-animate={canAnimate}
        style={{ width: `${progress}%` }}
        onTransitionEnd={handleTransitionEnd}
      />
    </>
  );

  async function handleTransitionEnd() {
    setCanAnimate(false);
    setProgress(0);
    await new Promise((resolve) => setTimeout(resolve, DELAY));
    console.log(store.getIt("options"));
  }

  async function onSelect(option) {
    // Reset the progress bar:
    setCanAnimate(false);
    setProgress(0);

    await new Promise((resolve) => setTimeout(resolve, 100));

    // Store the selected option:
    store.smartAddIt("options", option);

    // Prepare the progress bar to animate:
    setCanAnimate(true);
    setProgress(100);
  }
}
