export interface Category {
  id: number;
  name: string;
}
export interface Props {
  Category: Category[];
}
export interface Product {
  id: string;
  title: string;
  price: number;
  images: string[];
  description: string;
  category: {
    name: string;
  };
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}
export interface Cart {
  cart: Product[];
}
export interface CartProps {
  setCartOpen: (open: boolean) => void;
  cartOpen: boolean;
}
