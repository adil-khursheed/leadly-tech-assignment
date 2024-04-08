import { cn } from "@/lib/utils";
import ListItem from "./NavListItem";
import { Button } from "./ui/button";
import React from "react";

interface ISubMenuProps {
  title1: string;
  description: string;
  image: string;
  title2?: string;
  listItems1: {
    title: string;
    href: string;
    description: string;
    icon: string;
  }[];
  listItems2?: {
    title: string;
    href: string;
    description: string;
    icon: string;
  }[];
}

const SubMenuItems: React.FC<ISubMenuProps> = ({
  title1,
  title2,
  description,
  image,
  listItems1,
  listItems2,
}) => {
  return (
    <div className="absolute top-14 left-1/2 -translate-x-1/2 shadow-lg rounded-lg border-[1px] bg-white h-auto">
      <ul className="flex items-start gap-2 p-3 w-full">
        <li className="flex flex-col gap-2 justify-start w-44">
          <h2 className="relative w-fit uppercase text-[#7DB434] font-semibold after:content-[''] after:absolute after:w-1/2 after:h-[2px] after:bg-[#7DB434] after:left-0 after:bottom-0">
            {title1}
          </h2>
          <p className="text-sm text-[#202020]">{description}</p>
          <Button className="px-8 rounded-full inline-block">View All</Button>
          <div className="flex-1 mt-auto">
            <img src={image} alt="Solution" />
          </div>
        </li>
        <div
          className={cn(
            "pt-[24px]",
            title1 === "solution"
              ? "w-[600px] grid grid-cols-2"
              : "flex flex-col justify-start gap-1 w-[300px]"
          )}>
          {listItems1.map((solution) => (
            <ListItem
              key={solution.title}
              title={solution.title}
              href={solution.href}
              icon={solution.icon}>
              {solution.description}
            </ListItem>
          ))}
        </div>
        {title2 && (
          <li className="border-l-[1px] border-l-gray-200 px-3 h-full">
            <div className="flex items-center justify-between max-w-80 w-full text-sm p-3">
              <h4 className="">{title2}</h4>
              <a href="#">View all</a>
            </div>
            <div className="flex flex-col justify-start gap-3 h-full">
              {listItems2?.map((industry) => (
                <ListItem
                  key={industry.title}
                  title={industry.title}
                  href={industry.href}
                  icon={industry.icon}>
                  {industry.description}
                </ListItem>
              ))}
            </div>
          </li>
        )}
      </ul>
    </div>
  );
};

export default SubMenuItems;
