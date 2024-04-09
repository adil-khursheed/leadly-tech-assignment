import { ChevronDown } from "lucide-react";
import SubMenuItems from "../SubMenuItems";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  developLists,
  industriesLists,
  resourcesLists,
  solutionLists,
} from "@/constants";

const DesktopMenu = () => {
  const [solutionsSubMenuToggle, setSolutionsSubMenuToggle] = useState(false);
  const [developSubMenuToggle, setDevelopSubMenuToggle] = useState(false);
  const [resourcesSubMenuToggle, setResourcesSubMenuToggle] = useState(false);
  return (
    <div className="hidden  lg:flex lg:items-center lg:gap-3">
      <div
        className="relative cursor-pointer p-2"
        onClick={() => {
          setDevelopSubMenuToggle(false);
          setResourcesSubMenuToggle(false);
          setSolutionsSubMenuToggle(!solutionsSubMenuToggle);
        }}>
        <p className="flex items-center gap-1">
          Solutions
          <span>
            <ChevronDown
              className={cn(
                "transition ease-in w-3 h-3",
                solutionsSubMenuToggle ? "rotate-180" : ""
              )}
            />
          </span>
        </p>
        {solutionsSubMenuToggle && (
          <SubMenuItems
            image="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/ms.categories/5b976fbe3c11d25dd02edc19/5d7b3c6dafa2f237111d8ddd-250x250.png"
            title1="solution"
            title2="Industries"
            description="Complete set of features and tools to start, market and grow your e-commerce business"
            listItems1={solutionLists}
            listItems2={industriesLists}
          />
        )}
      </div>
      <div
        className="relative cursor-pointer p-2"
        onClick={() => {
          setSolutionsSubMenuToggle(false);
          setResourcesSubMenuToggle(false);
          setDevelopSubMenuToggle(!developSubMenuToggle);
        }}>
        <p className="flex items-center gap-1">
          Develop
          <span>
            <ChevronDown
              className={cn(
                "transition ease-in w-3 h-3",
                developSubMenuToggle ? "rotate-180" : ""
              )}
            />
          </span>
        </p>
        {developSubMenuToggle && (
          <SubMenuItems
            image="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/ms.categories/5d652bd989362f53f8e9eb6d/5d7f475316ac837dcf6c083f-250x250.png"
            title1="develop"
            description="Developer friendly yet easy to use tools"
            listItems1={developLists}
          />
        )}
      </div>

      <div className="cursor-pointer">
        <p>Examples</p>
      </div>
      <div className="cursor-pointer">
        <p>Pricing</p>
      </div>
      <div
        className="relative cursor-pointer p-2"
        onClick={() => {
          setDevelopSubMenuToggle(false);
          setSolutionsSubMenuToggle(false);
          setResourcesSubMenuToggle(!resourcesSubMenuToggle);
        }}>
        <p className="flex items-center gap-1">
          Resources
          <span>
            <ChevronDown
              className={cn(
                "transition ease-in w-3 h-3",
                resourcesSubMenuToggle ? "rotate-180" : ""
              )}
            />
          </span>
        </p>
        {resourcesSubMenuToggle && (
          <SubMenuItems
            image="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/ms.categories/5d6618fffc4f6210fe467fda/5d7f476a16ac837dcf6c0af0-250x250.png"
            title1="resources"
            description="All that you need know to begin your online store with StoreHippo."
            listItems1={resourcesLists}
          />
        )}
      </div>
    </div>
  );
};

export default DesktopMenu;
