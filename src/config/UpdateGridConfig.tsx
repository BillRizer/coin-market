import {
  Configuration,
  setConfiguration,
  useScreenClass,
} from "react-grid-system";

export const UpdateGridConfig = () => {
  const screenClass = useScreenClass();
  let config: Configuration = {
    // containerWidths: [600, 800, 1216],
    containerWidths: [540, 740, 1140],
    // breakpoints: [302, 702, 1246],
    breakpoints: [540, 740, 960, 1140, 1540, 1810],
    defaultScreenClass: "lg",
    maxScreenClass: "lg",
    gutterWidth: 32,
    gridColumns: 12,
  };

  if (screenClass == "sm" || screenClass == "xs") {
    config.gutterWidth = 16;
    config.gridColumns = 4;
  }
  if (screenClass == "md") {
    config.gutterWidth = 32;
    config.gridColumns = 8;
  }
  setConfiguration(config);

  return <></>;
};
