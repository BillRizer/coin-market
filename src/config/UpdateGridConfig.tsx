import {
  Configuration,
  setConfiguration,
  useScreenClass,
} from "react-grid-system";

export const UpdateGridConfig = () => {
  const screenClass = useScreenClass();
  let config: Configuration = {
    containerWidths: [272, 672, 1216],
    breakpoints: [302, 702, 1246],
    defaultScreenClass: "lg",
    maxScreenClass: "lg",
    gutterWidth: 32,
    gridColumns: 12,
  };

  if (screenClass == "sm") {
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
