import Container from "./Container";
import Typewriter from "typewriter-effect";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <Container className="pt-24 h-full">
      <div className="flex items-center justify-between gap-4 w-full h-full">
        <div className=" bg-hero-bg-2 bg-no-repeat bg-contain bg-center flex-1">
          <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start gap-3 w-full h-full">
            <h1 className="text-[32px] md:text-[42px] font-bold leading-snug text-center lg:text-left">
              Leading Enterprise <br /> Ecommerce Platform in India
            </h1>
            <h3 className="text-lg md:text-[22px] font-bold flex flex-col lg:flex-row justify-center lg:justify-start items-center  gap-2">
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
            <p className="text-lg md:text-2xl text-center lg:text-left">
              Designed for diverse B2B and B2C business models
            </p>

            <div className="flex items-start">
              <Button className="uppercase rounded-full px-6 text-base">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <img
            src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/657809dbbcebf27febe432cc/ecommerce-banner.png"
            alt="hero-image"
            className="max-h-[553px]"
          />
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
