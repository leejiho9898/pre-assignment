export const mediaQuery = (maxWidth) => `
  @media (max-width: ${maxWidth}px)
`;

const media = {
  xxlarge: mediaQuery(2020),
  xlarge: mediaQuery(1640),
  large: mediaQuery(1500),
  medium: mediaQuery(1160),
  small: mediaQuery(740),
  xsmall: mediaQuery(470),
  custom: mediaQuery,
};

export default media;
