import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";

const buttonListStyles = cva(["flex items-center justify-center"]);

type button = {
  id: number;
  Component: React.ReactNode;
  title: string;
};
type ButtonListProps = VariantProps<typeof buttonListStyles> & {
  buttons: button[];
  className?: string;
};

const ButtonList = ({ buttons, className, ...props }: ButtonListProps) => {
  return (
    <div className={cn(buttonListStyles({ className }))} {...props}>
      {buttons?.map((button) => (
        <div key={button.id}>{button.Component}</div>
      ))}
    </div>
  );
};

export default ButtonList;
