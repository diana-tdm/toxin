import "./src/global.css";
import "@fontsource/montserrat";
import "@fontsource/montserrat/700.css";
import "@fontsource/quicksand";
import "@fontsource/quicksand/700.css";

import "air-datepicker/dist/css/datepicker.css";
import "air-datepicker/dist/js/datepicker";

const $ = require("jquery");

export const onInitialClientRender = () => {
  $(document).ready(function () {
    console.log("The answer is don't think about it!");
  });
};
