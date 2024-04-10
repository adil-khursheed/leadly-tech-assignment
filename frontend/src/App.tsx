import { lazy, useEffect, useState } from "react";
import useScrollPosition from "./hooks/useScrollPosition";
import { cn } from "./lib/utils";
import { Product } from "./lib/types";

const HeroSection = lazy(() => import("./components/HeroSection"));
const Header = lazy(() => import("./components/shared/Header"));
const BrandsSection = lazy(() => import("./components/BrandsSection"));
const ProductsSection = lazy(() => import("./components/ProductsSection"));

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const scrollPosition = useScrollPosition();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        if (!res.ok) {
          throw new Error("Internal server error");
        }

        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error while fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="">
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40",
          scrollPosition > 10 ? "bg-white shadow-md" : ""
        )}>
        <Header />
      </header>
      <section className="bg-none lg:bg-hero-bg bg-no-repeat bg-hero-bg-position pb-10 lg:pb-0">
        <HeroSection />
      </section>
      <section className="lg:ml-8 lg:rounded-tl-[100px] lg:rounded-br-[100px] bg-[#F9F9F9]">
        <BrandsSection />
      </section>
      <section className="py-10">
        <ProductsSection products={products} />
      </section>
    </main>
  );
};

export default App;
