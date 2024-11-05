import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentPropsWithRef, forwardRef } from "react";

const sectionStyles = cva([""], {
  variants: {
    variant: {
      default: [],
      withPadding: ["px-4 py-4 md:px-8 md:py-8 lg:px-16 lg:py-16 "],
      withMargin: ["max-w-screen-2xl mx-auto"],
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type SectionProps = ComponentPropsWithRef<"section"> &
  VariantProps<typeof sectionStyles>;

const Section = forwardRef<HTMLDivElement, SectionProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(sectionStyles({ className, variant }))}
        {...props}
      />
    );
  }
);

Section.displayName = "Section";
export default Section;
