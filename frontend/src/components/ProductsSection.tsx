import Container from "./Container";
import { Product } from "@/lib/types";
import ProductCard from "./ProductCard";

const ProductsSection = ({ products }: { products: Product[] }) => {
  return (
    <Container className="flex flex-col justify-start gap-3">
      <h2 className="text-3xl font-bold">Products</h2>
      <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {products.slice(0, 12).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Container>
  );
};

export default ProductsSection;
