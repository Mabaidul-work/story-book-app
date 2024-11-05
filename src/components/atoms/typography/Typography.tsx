import { cn } from "@/utils";
import { PolymorphicComponentPropsWithRef } from "@/utils/types";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const textStyles = cva("", {
  variants: {
    variant: {
      h1: "text-4xl font-bold",
      h2: "text-3xl font-bold",
      h3: "text-2xl font-semibold",
      h4: "text-xl font-semibold",
      h5: "text-lg font-medium",
      h6: "text-base font-medium",
      default: "text-base font-normal",
    },
    fontWeight: {
      default: "font-normal",
      heading: "font-bold",
    },
    textColor: {
      default: "",
    },
    italic: {
      true: "italic",
    },
    underline: {
      true: "underline underline-offset-2",
    },
    emphasis: {
      low: "text-gray-600 font-light",
    },
    fontOverflow: {
      ellipsis: "w-20 overflow-hidden text-ellipsis whitespace-nowrap",
      clip: "w-20 overflow-hidden text-clip whitespace-nowrap",
      none: "",
    },
  },
  defaultVariants: {
    variant: "default",
    fontWeight: "default",
    textColor: "default",
    fontOverflow: "none",
  },
});

type TypographyProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C, VariantProps<typeof textStyles>>;

type TypographyComponent = <C extends React.ElementType = "p">(
  props: TypographyProps<C>
) => React.ReactElement | null;

type ExtendedTypographyComponent = TypographyComponent & {
  displayName?: string;
};

const Typography: ExtendedTypographyComponent = forwardRef(
  <C extends React.ElementType = "p">(
    {
      as,
      emphasis,
      italic,
      underline,
      fontWeight,
      className,
      textColor,
      fontOverflow,
      variant,
      children,
      ...props
    }: TypographyProps<C>,
    ref?: React.Ref<C>
  ) => {
    const Component = as || "p";
    return (
      <Component
        ref={ref}
        className={cn(
          textStyles({
            fontWeight,
            emphasis,
            italic,
            underline,
            className,
            textColor,
            fontOverflow,
            variant,
          })
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
) as ExtendedTypographyComponent;

Typography.displayName = "Typography";

export default Typography;
