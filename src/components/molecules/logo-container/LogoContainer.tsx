import SVG from "@/constants/svgs/SVG";
import { websiteLogoPaths } from "@/constants/svgs/svgPaths";
import { FC } from "react";

interface LogoContainerProps {
  width?: string;
  height?: string;
}

const logos = [
  {
    id: 1,
    svg: (
      <SVG
        width="24"
        height="24"
        viewBox="0 0 37 36"
        fill="#000"
        paths={websiteLogoPaths}
      />
    ),
  },
];

const LogoContainer: FC<LogoContainerProps> = ({ width, height }) => {
  return (
    <div className="flex !items-center gap-2 lg:gap-3">
      {logos?.map((logo) => (
        <div key={logo.id}>
          {logo.svg}
          <style jsx>{`
            div {
              width: ${width};
              height: ${height};
            }
          `}</style>
        </div>
      ))}
    </div>
  );
};

export default LogoContainer;
