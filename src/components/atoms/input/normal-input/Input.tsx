import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const inputStyles = cva(
  [
    "px-3 py-2 text-base rounded-md transition-all duration-200 focus:outline-none focus:ring-2",
  ],
  {
    variants: {
      variant: {
        default: "border border-gray-500",
        borderless: "border-none",
      },
      textColor: {
        default: "text-black",
        primary: "text-primary-500",
      },
      bgColor: {
        default: "bg-white",
        primary: "bg-primary-500",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed",
      },
    },
    compoundVariants: [
      {
        variant: "default",
        textColor: "default",
        bgColor: "default",
        className: "focus:border-orange-500 focus:ring-orange-200",
      },
      {
        variant: "borderless",
        textColor: "default",
        bgColor: "default",
        className:
          "bg-gray-300 text-white focus:bg-transparent focus:text-black focus:ring-orange-200",
      },
    ],
    defaultVariants: {
      variant: "default",
      textColor: "default",
      bgColor: "default",
      disabled: false,
    },
  }
);

type InputProps = ComponentProps<"input"> & VariantProps<typeof inputStyles>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = "text",
      placeholder,
      className,
      textColor,
      variant,
      bgColor,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <input
        ref={ref}
        type={`${type}`}
        placeholder={`${placeholder}`}
        disabled={disabled}
        className={cn(
          inputStyles({
            variant,
            bgColor,
            textColor,
            disabled,
            className,
          })
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
