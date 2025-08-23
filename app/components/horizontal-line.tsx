import { NextPage } from "next"

interface HorizontalLineProps {
  height?: number
}

const HorizontalLine: NextPage<HorizontalLineProps> = () => {
  return (
    <div className="flex items-center justify-center">
      <span className="h-1 w-15 bg-primary" />
      <span className="h-1 w-8 bg-secondary" />
    </div>

  )
}

export default HorizontalLine
