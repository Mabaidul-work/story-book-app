import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentPropsWithRef, forwardRef } from "react";

const dividerStyles = cva(["bg-gray-500"], {
  variants: {
    variant: {
      horizontal: "w-full h-px",
      vertical: "h-5 w-px",
    },
  },
  defaultVariants: {
    variant: "horizontal",
  },
});

type DividerProps = ComponentPropsWithRef<"div"> &
  VariantProps<typeof dividerStyles>;

const Divider = forwardRef<HTMLDivElement, DividerProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(dividerStyles({ className, variant }))}
        {...props}
      />
    );
  }
);

Divider.displayName = "Divider";
export default Divider;
