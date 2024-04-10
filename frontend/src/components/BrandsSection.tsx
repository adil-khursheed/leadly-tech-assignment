import { brandLists } from "@/constants";
import Container from "./Container";

const BrandsSection = () => {
  return (
    <Container className="h-full py-10">
      <div className="h-full">
        <div className="flex flex-col-reverse lg:flex-row items-center h-full">
          <div className="lg:w-[58.333333336%] after:bg-brands-bg after:content-[''] after:absolute after:right-0">
            <div className="lg:w-[calc(100%-172px)] h-full relative pt-[60px]">
              <div className="flex items-center gap-3 flex-wrap justify-center">
                {brandLists.map((brand, i) => (
                  <div key={i} className="w-[20%] lg:w-1/3">
                    <img
                      src={brand.brandImage}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:w-[41.66666666666667%] px-3">
            <div className="relative w-full">
              <h2 className=" text-[26px] lg:text-[36px] font-bold text-center lg:text-right">
                Empowering Brands Across the Globe
                <img
                  src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/ms.files/new-home/heading-before.png"
                  alt=""
                  className="w-11 h-11 absolute -top-6 left-0 md:left-[60px] lg:left-0"
                />
              </h2>
            </div>
            <div className="text-center lg:text-right text-lg">
              <p>
                StoreHippo ecommerce platform builds extraordinary solutions to
                power brands across 15 countries and 30+ industries. Add your
                brand to the long list of brands that trust StoreHippo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BrandsSection;
