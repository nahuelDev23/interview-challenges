export interface Cart extends Product {
  quantity: number;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
}
