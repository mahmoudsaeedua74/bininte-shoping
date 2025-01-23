import { Product } from "@/Types/products.typs";
import { gql, useQuery } from "@apollo/client";
import { useAppSelector } from "./useRedux";

export function useProducts({offset}: {offset: number}) {
  const { priceMin, priceMax, category, show } = useAppSelector(
    (store) => store.filterSlice
  );
  const GetProdcuts = gql`
                  query {
                    products(
                      categoryId: ${category || 0}, 
                      price_min: ${priceMin || 0}, 
                      price_max: ${priceMax || 1000}, 
                      limit: ${show}, 
                      offset: ${offset}
                    ) {
                      id
                      title
                      price
                      description
                      images 
                      category {
                        id
                        name
                        image
                      }
                    }
                  }
                  `;
  const { loading, error, data } = useQuery(GetProdcuts);
  const products: Product[] = data?.products || [];
  const isImageValid = (image: string) => {
    try {
      new URL(image);
      return true;
    } catch {
      return false;
    }
  };
  return { products, isImageValid, loading, error };
}
//make custom hook to get the products from the server 