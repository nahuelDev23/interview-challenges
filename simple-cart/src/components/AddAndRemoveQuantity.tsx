import {Box, Button, Flex} from "@chakra-ui/react";
import {useContext} from "react";

import {ICartProduct, } from "../App";
import {CartContext} from "../context/cart/CartContext";
import {Product} from "../types";

interface IProps {
  product: Product;
}

export const AddAndRemoveQuantity = ({product}: IProps) => {
  const {cart, updateQuantity} = useContext(CartContext);

  const changeQuantity = (cProduct: ICartProduct, action: number) => {
    updateQuantity(cProduct, action);
  };

  return (
    <>
      {cart.map((cProduct: any) => {
        if (cProduct.id === product.id)
          return (
            <Flex key={cProduct.id} alignItems="center" flexDirection="row" justifyContent="center">
              <Button variant="custom" onClick={() => changeQuantity(cProduct, -1)}>
                -
              </Button>
              <Box color="black">{cProduct.quantity}</Box>
              <Button variant="custom" onClick={() => changeQuantity(cProduct, +1)}>
                +
              </Button>
            </Flex>
          );
      })}
    </>
  );
};
