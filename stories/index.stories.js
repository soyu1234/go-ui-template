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
import { ReviewModal } from "../src/ReviewModal";
import { ComponentTest } from "../src/ComponentTest";

import { EditorPasteHtml } from "../src/EditorPasteHtml";

import theme from "./theme";

// utils imports section
import LayoutFeatures from "../src/constants/constants";
import data from "./data";

let globVal = [{ type: "paragraph", children: [{ text: "", color: "black" }] }];

// storiesOf("Home", module).add("5 in 1", () => {
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
      <FooterLeft {...props} />
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

// storiesOf("Modal", module).add("review terms and conditions modal", () => {
//   return (
//     <ThemeProvider theme={theme}>
//       <ReviewModal />
//     </ThemeProvider>
//   );
// });

storiesOf("editor", module).add("Slate Editor", () => {
  const handleChange = data => {
    globVal = data;
    // console.log(globVal);
  };
  return (
    <ThemeProvider theme={theme}>
      <ComponentTest change={data => handleChange(data)} globVal={globVal} />
    </ThemeProvider>
  );
});

storiesOf("Editor", module).add("Slate preview", () => {
  console.log(globVal);
  return (
    <ThemeProvider theme={theme}>
      <EditorPasteHtml globVal={globVal} />
    </ThemeProvider>
  );
});
