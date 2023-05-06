// Mobile S - 320px
// Mobile M - 375px
// Mobile L - 425px
// Tablet - 768px
// Laptop - 1024px
// Laptop L - 1440px
// 4K - 2560px

const size = {
  mobileS: 320,
  mobile: 522,
  tablet: 768,
  laptop: 1440,
  desktop: 2560,
};

export const device = {
  mobileS: `(max-width: ${size.mobileS}px)`,
  mobile: `(max-width: ${size.mobile}px)`,
  tablet: `(max-width: ${size.tablet}px)`,
  laptop: `(max-width: ${size.laptop}px)`,
  desktop: `(max-width: ${size.desktop}px)`,
  desktopL: `(max-width: ${size.desktop}px)`,
};
