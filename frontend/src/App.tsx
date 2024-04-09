import { lazy } from "react";

const HeroSection = lazy(() => import("./components/HeroSection"));
const Header = lazy(() => import("./components/shared/Header"));
const BrandsSection = lazy(() => import("./components/BrandsSection"));

const App = () => {
  return (
    <main className="relative">
      <header className="fixed top-0 left-0 right-0">
        <Header />
      </header>
      <section className="h-screen bg-none lg:bg-hero-bg bg-no-repeat bg-hero-bg-position">
        <HeroSection />
      </section>
      <section className="h-screen ml-8 rounded-tl-[100px] rounded-br-[100px] bg-[#F9F9F9]">
        <BrandsSection />
      </section>
    </main>
  );
};

export default App;
