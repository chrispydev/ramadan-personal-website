import { FC } from "react";

interface HorizontalLineProps {
  height?: number; // optional
}

const HorizontalLine: FC<HorizontalLineProps> = ({ height = 3 }) => {
  return (
    <div className="flex items-center justify-center">
      <span className={`w-[60px] bg-primary`} style={{ height: `${height}px` }} />
      <span className={`w-[32px] bg-secondary`} style={{ height: `${height}px` }} />
    </div>
  );
};

export default HorizontalLine;

