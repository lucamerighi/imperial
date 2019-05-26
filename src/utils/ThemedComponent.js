import styled, { css } from "styled-components";

const ScreenSizes = {
  DESKTOP: 992,
  TABLET: 768,
  PHONE: 576
};
const sizes = {
  desktop: ScreenSizes.DESKTOP,
  tablet: ScreenSizes.TABLET,
  phone: ScreenSizes.PHONE
};
// iterate through sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export { sizes, media, css };
export default styled;
