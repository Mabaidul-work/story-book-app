import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentPropsWithRef, forwardRef } from "react";

const boxStyles = cva(["w-full"]);

export type BoxProps = ComponentPropsWithRef<"div"> &
  VariantProps<typeof boxStyles>;

const Box = forwardRef<HTMLDivElement, BoxProps>(
  ({ className, ...props }, ref) => {
    return (
      <div ref={ref} {...props} className={cn(boxStyles({ className }))} />
    );
  }
);

Box.displayName = "Box";

export default Box;
