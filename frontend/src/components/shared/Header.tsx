import { Menu } from "lucide-react";
import Container from "../Container";
import { Button } from "../ui/button";
import DesktopMenu from "./DesktopMenu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <Container className="py-3 flex items-center justify-between">
      <div>
        <img
          src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/ms.settings/521c4d7548c284890e000001/594a155440e9fb9e592f2ba9-240x240.png"
          alt="StoreHippo Logo"
          title="StoreHippo"
          className="h-[55px]"
        />
      </div>

      <DesktopMenu />

      <div className="hidden lg:flex lg:items-center lg:gap-3">
        <Button className="rounded-full uppercase px-8">Contact Us</Button>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Menu />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Contact Sales</DropdownMenuItem>
            <DropdownMenuItem>Start Free Trial</DropdownMenuItem>
            <DropdownMenuItem>Schedule Demo</DropdownMenuItem>
            <DropdownMenuItem>Login to you Store</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <MobileMenu />
    </Container>
  );
};

export default Header;
