import React from "react";
import { ThemeProvider } from "@avocado-ui/react";
import "./style.css";

const appTheme = {};

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={appTheme}>{element}</ThemeProvider>;
};
