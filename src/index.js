// A version of the code with explanatory comments is available in the dev branch.

import React from "react";
import ReactDOM from "react-dom/client";
import { PermissionProvider } from "./PermissionContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <PermissionProvider>
    <App />
  </PermissionProvider>
);
