import { Button } from "@/components/atoms";
import { cn } from "@/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React, { useState } from "react";

const codeVariants = cva(
  "relative inline-flex items-center rounded-lg font-bold transition-colors duration-200 cursor-pointer select-all focus:outline-none",
  {
    variants: {
      variant: {
        default:
          "border-2 border-dashed border-primary-800 bg-primary-100 text-primary-800 hover:bg-primary-300",
        primary: "bg-blue-100 text-blue-800 hover:bg-blue-200",
        secondary: "bg-purple-100 text-purple-800 hover:bg-purple-200",
      },
      size: {
        sm: "text-sm px-2 py-1",
        md: "text-base px-3 py-2",
        lg: "text-lg px-4 py-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

interface CodeProps extends VariantProps<typeof codeVariants> {
  code: string;
  className?: string;
}

const Code: React.FC<CodeProps> = ({ code, variant, size, className }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="relative inline-block">
      <Button
        variant={"outline"}
        onClick={handleCopy}
        className={cn(codeVariants({ variant, size }), className)}
      >
        use code : {code}
      </Button>
      {showTooltip && (
        <div className="w-full flex items-center justify-center absolute top-12 left-1/2 -translate-x-1/2 p-2 text-sm text-white bg-gray-800 rounded shadow-lg ">
          Code copied
        </div>
      )}
    </div>
  );
};

export default Code;
