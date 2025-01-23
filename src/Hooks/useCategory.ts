import { Category } from "@/Types/products.typs";
import { gql, useQuery } from "@apollo/client";
const getProduct = gql`
  query GetProducts {
    categories {
      id
      name
    }
  }
`;
export function useCategory(): Category[] {
  const { data } = useQuery(getProduct);
  const categories: Category[] = data?.categories || [];
  return categories;
}
//make custom hook to get the categories from the server