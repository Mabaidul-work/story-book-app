import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentPropsWithRef, forwardRef } from "react";

const stackStyles = cva(["flex", "flex-col", "items-start"], {
  variants: {
    direction: {
      row: "flex-row",
      column: "flex-col",
    },
    alignItems: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
    },
    justifyContent: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
    },
  },
  defaultVariants: {
    direction: "column",
    alignItems: "start",
    justifyContent: "start",
  },
});

type StackProps = ComponentPropsWithRef<"div"> &
  VariantProps<typeof stackStyles>;

const Stack = forwardRef<HTMLDivElement, StackProps>(
  ({ className, direction, alignItems, justifyContent, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          stackStyles({ className, direction, alignItems, justifyContent })
        )}
        {...props}
      />
    );
  }
);

Stack.displayName = "Stack";

export default Stack;
