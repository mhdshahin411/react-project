import React from "react";
import ReactDOM from "react-dom/client";

import "@fortawesome/fontawesome-free/css/all.min.css";

// import App from "./App";
// import Apint from "./Apint";
import { store } from "./store";
import { Provider } from "react-redux";
import Main from "./Main";
// import { Counter } from "./Counter";
// import Image from "./image.jsx";
import Apint from "./Apint";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Provider store={store}>
      <Main />
      <Apint />
      {/* <Image/> */}
      {/* <Counter/> */}
    </Provider>
  </div>
);
