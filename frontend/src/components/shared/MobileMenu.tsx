import { Menu, Phone } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import {
  developLists,
  industriesLists,
  resourcesLists,
  solutionLists,
} from "@/constants";
import ListItem from "../NavListItem";
import { Button } from "../ui/button";

const MobileMenu = () => {
  return (
    <div className="block lg:hidden">
      <Sheet>
        <SheetTrigger>
          <div className="flex items-center gap-3">
            <p>Menu</p>
            <Menu />
          </div>
        </SheetTrigger>
        <SheetContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Solutions</AccordionTrigger>
              <AccordionContent>
                <ul>
                  {solutionLists.map((solution) => (
                    <ListItem
                      key={solution.title}
                      title={solution.title}
                      href={solution.href}
                      icon={solution.icon}
                    />
                  ))}
                  <Button className="w-full bg-transparent hover:bg-transparent text-[#7DB434]">
                    View All
                  </Button>
                </ul>
                <ul>
                  <p>Industries</p>
                  {industriesLists.map((industry) => (
                    <ListItem
                      key={industry.title}
                      title={industry.title}
                      href={industry.href}
                      icon={industry.icon}
                    />
                  ))}
                  <Button className="w-full bg-transparent hover:bg-transparent text-[#7DB434]">
                    View All
                  </Button>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Develop</AccordionTrigger>
              <AccordionContent>
                <ul>
                  {developLists.map((develop) => (
                    <ListItem
                      key={develop.title}
                      title={develop.title}
                      href={develop.href}
                      icon={develop.icon}
                    />
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <Button
                variant={"link"}
                className="px-0 bg-transparent hover:bg-transparent text-[#020817] font-medium text-base">
                Examples
              </Button>
            </AccordionItem>
            <AccordionItem value="item-4">
              <Button
                variant={"link"}
                className="px-0 bg-transparent hover:bg-transparent text-[#020817] font-medium text-base">
                Pricing
              </Button>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Resources</AccordionTrigger>
              <AccordionContent>
                <ul>
                  {resourcesLists.map((resource) => (
                    <ListItem
                      key={resource.title}
                      title={resource.title}
                      href={resource.href}
                      icon={resource.icon}
                    />
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="flex flex-col justify-center gap-2">
            <Button className="uppercase rounded-full w-full">
              Start Your Free Trial
            </Button>
            <Button className="uppercase rounded-full w-full">
              <Phone />
              +91-8010-117-117
            </Button>
            <Button className="uppercase rounded-full w-full">
              request a demo
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
