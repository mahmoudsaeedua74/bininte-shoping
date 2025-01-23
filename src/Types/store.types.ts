export interface InitialState {
  selectedTab: number;
}
export interface FilterState {
  category: string;
  priceMin: number;
  priceMax: number;
  layoutGrid: boolean;
  layoutSlice: boolean;
  sortByName: string;
  show: number;
}
export interface ProductsCart {
  productId: string;
  title: string;
  price: number;
  quantity: number;
  totalPrice: number;
}

export interface CartState {
  cart: ProductsCart[];
}
export interface itemCart {
  item: ProductsCart;
}
