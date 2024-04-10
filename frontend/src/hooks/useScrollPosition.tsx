import { useEffect, useState } from "react";

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatedPosition = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", updatedPosition);

    updatedPosition();

    return () => {
      window.removeEventListener("scroll", updatedPosition);
    };
  }, []);

  return scrollPosition;
};

export default useScrollPosition;
