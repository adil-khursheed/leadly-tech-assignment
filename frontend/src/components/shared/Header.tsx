import Container from "../Container";
import { Button } from "../ui/button";
import DesktopMenu from "./DesktopMenu";

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

      <Button className="rounded-full uppercase px-8">Contact Us</Button>
    </Container>
  );
};

export default Header;
