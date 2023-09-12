import { Screens } from "../types";

type Props = {
  screens: Screens[];
  currentIndex: number;
  setCurrentIndex(index: number): void;
};

export { Props };
