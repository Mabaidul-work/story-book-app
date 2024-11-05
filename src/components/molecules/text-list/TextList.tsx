import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { ComponentProps, forwardRef } from "react";

const textListStyles = cva("flex", {
  variants: {
    direction: {
      row: "flex-row",
      column: "flex-col",
    },
    gap: {
      none: "gap-0",
      sm: "gap-1",
      md: "gap-2",
      lg: "gap-3",
      xl: "gap-4",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
    },
  },
  defaultVariants: {
    direction: "column",
    gap: "md",
    align: "center",
    justify: "center",
  },
});

type TextListProps = ComponentProps<"div"> &
  VariantProps<typeof textListStyles> & {
    textLists?: {
      id: number;
      textComponent: React.ReactNode;
    }[];
  };

const TextList = forwardRef<HTMLDivElement, TextListProps>(
  ({ textLists, className, direction, gap, align, justify, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(
          textListStyles({ direction, gap, align, justify, className })
        )}
      >
        {textLists?.map((textList) => (
          <React.Fragment key={textList.id}>
            {textList.textComponent}
          </React.Fragment>
        ))}
      </div>
    );
  }
);
TextList.displayName = "TextList";

export default TextList;
