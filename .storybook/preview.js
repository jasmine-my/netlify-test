import React from "react";
import '../src/global_styles/globalFonts.scss';
import '../src/global_styles/font.css';
import '../src/global_styles/format_styles.css';
import '../src/global_styles/colors.scss';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}