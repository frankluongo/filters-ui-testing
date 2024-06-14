import { useState } from "react";
import { StoreInterface } from "../entities/StoreInterface";
import { Progress } from "../components/Progress/Progress";

import { DELAY } from "../utils/constants";
import { Options } from "../components/Options/Options";

import { GridContainer } from "../components/GridContainer/GridContainer";
import { GridSidebar } from "../components/GridSidebar/GridSidebar";
import { GridMain } from "../components/GridMain/GridMain";
import Results from "../components/Results/Results";

const store = new StoreInterface();

export function DelayedResults() {
  const [disabled, setDisabled] = useState(false);
  const [canAnimate, setCanAnimate] = useState(false);
  const [progress, setProgress] = useState(0);

  return (
    <>
      <GridContainer>
        <GridSidebar>
          <Options onSelect={onSelect} />
        </GridSidebar>
        <GridMain>
          <Results disabled={disabled} />
        </GridMain>
      </GridContainer>
      <Progress
        data-animate={canAnimate}
        style={{
          width: `${progress}%`,
          position: "absolute",
          top: 0,
          bottom: "auto",
        }}
        onTransitionEnd={handleTransitionEnd}
      />
    </>
  );

  async function handleTransitionEnd() {
    reset();
    await new Promise((resolve) => setTimeout(resolve, DELAY));
    console.log(store.getIt("options"));
  }

  async function onSelect(option) {
    // Reset the progress bar:
    reset();

    await new Promise((resolve) => setTimeout(resolve, 100));

    // Store the selected option:
    store.smartAddIt("options", option);

    // Prepare the progress bar to animate:
    animating();
  }

  function animating() {
    setDisabled(true);
    setCanAnimate(true);
    setProgress(100);
  }

  function reset() {
    setDisabled(false);
    setCanAnimate(false);
    setProgress(0);
  }
}
