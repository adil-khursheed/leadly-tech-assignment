import { cn } from "@/lib/utils";
import React from "react";

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  icon: string;
  title: string;
}

const ListItem = React.forwardRef<React.ElementRef<"a">, ListItemProps>(
  ({ className, title, icon, children, ...props }, ref) => {
    return (
      <li>
        <a
          ref={ref}
          className={cn(
            "select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground flex items-start gap-2",
            className
          )}
          {...props}>
          <img src={icon} alt="nav-icon" className="w-7 h-7" />
          <div>
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
              {children}
            </p>
          </div>
        </a>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

export default ListItem;
