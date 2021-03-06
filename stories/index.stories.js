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
// import { CardComponent } from "../src/CardComponent";
// import { ReviewModal } from "../src/ReviewModal";
import { FooterPlain } from "../src/FooterPlain";

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
  const props = {
    logo:
      "https://storage.googleapis.com/orbit-static/orbit/orbit-logo-512.png",
    name: "Orbit"
  };
  return (
    <ThemeProvider theme={theme}>
      <Header {...props} />
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

storiesOf("Editor", module).add(
  "Slate empty preview while data is loading",
  () => {
    console.log(globVal);
    return (
      <ThemeProvider theme={theme}>
        <ReviewModal data={globVal} />
      </ThemeProvider>
    );
  }
);

storiesOf("Editor", module).add("Slate preview with data", () => {
  const data = [
    { type: "paragraph", children: [{ text: "", color: "black" }] },
    { type: "paragraph", children: [{ text: "hello", color: "black" }] }
  ];
  console.log(globVal);
  return (
    <ThemeProvider theme={theme}>
      <ReviewModal data={data} />
    </ThemeProvider>
  );
});

storiesOf("Footer", module).add("Simpler Footer", () => {
  const footerProps = {
    theme: theme,
    url: "https://gamedistribution.com/",
    website: "Game Distribution",
    privacyAndTermsApi: "http://localhost:6007/iframe.html?id=home--default",
    logoUrl:
      "https://storage.googleapis.com/orbit-static/orbit/orbit-logo-512.png",
    data: [{ type: "paragraph", children: [{ text: "a" }] }]
  };
  return (
    <ThemeProvider theme={theme}>
      <FooterPlain {...footerProps} />
    </ThemeProvider>
  );
});
