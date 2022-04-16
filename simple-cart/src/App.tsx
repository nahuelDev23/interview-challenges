/* eslint-disable prettier/prettier */
import { useContext, useEffect, useState } from "react";
import { Box, Text, Button, Flex, Grid, Heading } from "@chakra-ui/react";

import api from "./api";
import { AddAndRemoveQuantity } from "./components/AddAndRemoveQuantity";
import { Product } from "./types";
import { CartContext } from './context/cart/CartContext';

export interface ICartProduct extends Product {
  quantity: number;
}

export interface ICart {
  products: ICartProduct[];
}

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  const { addProduct, totalPrice, quantityProductsInCart, isProductInCart } = useContext(CartContext)

  useEffect(() => {
    api.list().then(setProducts);
  }, []);


  const onAddToCart = (product: Product) => {
    addProduct({ ...product, quantity: 1 })
  };

  return (
    <main>
      <Heading color='black' fontSize='24px' p='4'>Estampitiency</Heading>
      <Grid as='section' gap='12' gridTemplateColumns='repeat(auto-fill, minmax(320px, 1fr))' p='16px'>
        {products.map((product) => (
          <Flex key={product.id} as='article' flexDir='column' gap='16px' >
            <img src={product.image} />
            <Box display='flex' flexDir='column' gap='6px' height='100%'>
              <Text color='black' fontSize='20px' fontWeight='500'>{product.title}</Text>
              <Text color='gray'>{product.description}</Text>
            </Box>
            {
              isProductInCart(product) ? <AddAndRemoveQuantity product={product} /> : <Button variant='custom' onClick={() => onAddToCart(product)}>Agregar</Button>
            }
          </Flex>
        ))}
      </Grid>
      <Box as='aside' bottom='0' display='flex' justifyContent='center' mx='auto' pb='4' position='sticky' >
        <Button variant='customShadow'>{quantityProductsInCart} productos (total: {totalPrice})</Button>
      </Box>
      <Box as='footer' border='1px solid gray' color='gray' p='16px' textAlign='center'   >
        Encontrá la consigna de este ejercicio y otros más{" "}
        <a href="https://github.com/goncy/interview-challenges/tree/main/simple-cart">acá</a>
      </Box>
    </main>
  );
}

export default App;
