import { cn } from "@/lib/utils";
import React from "react";

interface IContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<IContainerProps> = ({ children, className }) => {
  return (
    <div className={cn("max-w-6xl mx-auto px-3", className)}>{children}</div>
  );
};

export default Container;
