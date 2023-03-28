import { countdown } from "./core/countdown.js";
import { deployPayload } from "./core/deploy.js";
import { fuel } from "./core/fuel.js";
import { liftoff } from "./core/liftoff.js";
import { loadPayload } from "./core/load.js";
import { FISHSAT, NFSAT } from "./payload/satellites.js";

export default function launch() {
  loadPayload(FISHSAT);
  loadPayload(NFSAT);
  fuel();
  let counter = 5;
  while (counter) {
    countdown();
    counter--;
  }
  if (counter === 0) {
    liftoff();
  }
  deployPayload();
}

// Implement the launch sequence function here and export it as the default export.
