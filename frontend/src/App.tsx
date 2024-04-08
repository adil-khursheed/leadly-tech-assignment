import { lazy } from "react";

const HeroSection = lazy(() => import("./components/HeroSection"));
const Header = lazy(() => import("./components/shared/Header"));

const App = () => {
  return (
    <main className="relative">
      <header className="fixed top-0 left-0 right-0">
        <Header />
      </header>
      <section className="h-screen bg-hero-bg bg-no-repeat bg-hero-bg-position">
        <HeroSection />
      </section>
    </main>
  );
};

export default App;
