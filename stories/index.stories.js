// library import section
import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "@material-ui/styles";
import "@storybook/addon-viewport/register";
// component import section
import { Home } from "../src/Home/index";
import { Footer } from "../src/Footer";
import { FooterLeft } from "../src/FooterLeft";
import { Header } from "../src/Header";
import theme from "./theme";

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-yaml";
import "ace-builds/src-noconflict/theme-github";

// utils imports section
import LayoutFeatures from "../src/constants/constants";
import data from "./data";

// storiesOf('Home', module).add('5 in 1', () => {
//   // Create new object from original data with different reference, so actual data won't be corrupted.
//   const lessData = { ...data };
//   lessData.game.amount = 5;
//   console.log(LayoutFeatures.LESS_AMOUNT_OF_CARDS);
//   return <Home data={lessData} layout={LayoutFeatures.LESS_AMOUNT_OF_CARDS} />;
// });

// storiesOf('Home', module).add('100 in 1', () => {
//   // Create new object from original data with different reference, so actual data won't be corrupted.
//   const moreData = { ...data };
//   moreData.game.amount = 100;
//   return <Home data={moreData} layout={LayoutFeatures.MUCH_AMOUNT_OF_CARDS} />;
// });

// storiesOf("Footer", module).add("footer", () => {
//   return (
//     <ThemeProvider theme={theme}>
//       <Footer />
//     </ThemeProvider>
//   );
// });

storiesOf("Footer", module).add("footerLeft", () => {
  const props = {
    url: "https://gamedistribution.com/",
    website: "Game Distribution",
    privacyUrl: "https://azerion.com/business/privacy.html",
    termsAndConditionsUrl: "https://static.gamedistribution.com/terms/both.html"
  };
  return (
    <ThemeProvider theme={theme}>
      <FooterLeft {...props} themeMode={theme.palette.type} />
    </ThemeProvider>
  );
});

storiesOf("Header", module).add("header1", () => {
  return (
    <ThemeProvider theme={theme}>
      <Header themeMode={theme.palette.type} />
    </ThemeProvider>
  );
});
