import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Source Sans Pro:400", "sans-serif"]
  }
});

const theme = {
  colors: {
    devLogo: "#FC6264",
    mainBackground: "#FFF",
    subBackground: "#A3A3A3",
    primaryText: "#0313FC",
    inputText: "ad0099"
  },
  fonts: {
    primary: {
      family: "Source Sans Pro, sans-serif",
      weight: 400
    }
  }
};

export default theme;
