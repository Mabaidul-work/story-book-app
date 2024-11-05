import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentPropsWithRef, forwardRef } from "react";

const containerStyles = cva([
  "container mx-auto flex items-center justify-center",
]);

export type ContainerProps = ComponentPropsWithRef<"div"> &
  VariantProps<typeof containerStyles>;

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(containerStyles({ className }))}
      />
    );
  }
);

Container.displayName = "Container";

export default Container;
