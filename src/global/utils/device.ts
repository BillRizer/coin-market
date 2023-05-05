// Mobile S - 320px
// Mobile M - 375px
// Mobile L - 425px
// Tablet - 768px
// Laptop - 1024px
// Laptop L - 1440px
// 4K - 2560px

const size = {
  mobileS: "320px",
  mobile: "522px",
  tablet: "768px",
  laptop: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
};
