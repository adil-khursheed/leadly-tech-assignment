import Container from "./Container";
import Typewriter from "typewriter-effect";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <Container className="pt-24 flex items-center gap-4">
      <div className="flex flex-col justify-start gap-3">
        <h1 className="text-[42px] font-bold leading-snug">
          Leading Enterprise <br /> Ecommerce Platform in India
        </h1>
        <h3 className="text-2xl font-bold flex items-center gap-2">
          Build whitelabelled{" "}
          <span className="text-[#7DB434]">
            <Typewriter
              options={{
                strings: [
                  "B2C Marketplaces",
                  "B2B2C Marketplaces",
                  "Hyperlocal Marketplaces",
                  "Multi Country Marketplaces",
                  "Multi Brand Marketplaces",
                  "Multilingual Marketplaces",
                  "Vertical Marketplaces",
                  "Horizontal Marketplaces",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h3>
        <p className="text-2xl">
          Designed for diverse B2B and B2C business models
        </p>

        <div className="flex items-start">
          <Button className="uppercase rounded-full px-6 text-base">
            Schedule a Demo
          </Button>
        </div>
      </div>
      <div>
        <img
          src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/657809dbbcebf27febe432cc/ecommerce-banner.png"
          alt="hero-image"
          className="max-h-[553px]"
        />
      </div>
    </Container>
  );
};

export default HeroSection;
