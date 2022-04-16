import {extendTheme} from "@chakra-ui/react";

import colors from "./colors";
import Button from "./components/Button";
import Main from "./components/Main";
import styles from "./styles";

const overrides = {
  styles,
  colors,
  components: {
    Button,
    Main,
  },
};

export default extendTheme(overrides);
