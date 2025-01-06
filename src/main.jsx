import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import addcartReducer from "./features/CartSlice.jsx";
const store = configureStore({
  reducer: {
    cart: addcartReducer,
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
