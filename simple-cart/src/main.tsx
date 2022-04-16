import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import {CartProvider} from "./context/cart/CartProvider";

import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
