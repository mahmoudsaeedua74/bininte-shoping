import Error from "@/Components/Error/Error";
import ProductDetails from "@/Components/Products/ProductDetails";
import ProductsNav from "@/Components/Products/ProductsNav";
import RelatedProduct from "@/Components/Products/RelatedProduct";
import React from "react";
const isValidImageUrl = (imageUrl: string) => {
  try {
    // Check if the image URL is a valid URL and not an empty or malformed string
    new URL(imageUrl.replace(/[\[\]"']/g, ""));
    return true;
  } catch {
    return false;
  }
};
const page = async ({
  params,
}: {
  params: Promise<{ id: string; category: string; dis: string }>;
}) => {
  const slug = await params;
  let products;
  try {
    const response = await fetch("https://api.escuelajs.co/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query {
            product(id: ${slug.id}) {
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
        `,
      }),
    });

    const data = await response.json();
    products = data.data.product;
    products.images = products.images
      .map((img: string) => img.replace(/[\[\]"']/g, ""))
      .filter(isValidImageUrl);
    if (products.images.length === 0) {
      products.images = [
        products.category.image || "/path/to/default/placeholder-image.jpg",
      ];
    }
  } catch {
    return <Error />;
  }
  return (
    <section className="container">
      <div>
        <ProductsNav slug={slug} />
      </div>
      <div>
        <ProductDetails products={products} />
      </div>
      <div className="mb-3">
        <h3 className="text-textColor font-semibold text-[30px] my-20 text-center">
          RELATED PRODUCTS
        </h3>
        <RelatedProduct limit={4} />
      </div>
    </section>
  );
};
export default page;
