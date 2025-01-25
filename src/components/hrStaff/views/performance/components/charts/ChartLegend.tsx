import { FC } from "react"


type ChildrenProp = {
    children?: React.ReactNode,
    className?: string,
    title?: string,
    legends?: {
        title: string,
        color: string,
    }[],
    onClick?: () => void,
}

export const ChartLegend: FC<ChildrenProp> = ({ legends })  => (
    <div className="flex items-center  xl:gap-12 lg:gap-8 gap-5 text-sm text-gray-600">
  {legends?.map((legend) => (
    <div className="flex items-center" key={legend.title}>
      <span style={{background: `${legend.color}`}} className={`inline-block w-3 h-3 xl:mr-4 lg:mr-3 mr-2 rounded-full`}></span>
      <span className="font-gothic xl:font-extrabold font-bold xl:text-base lg:text-sm text-xs text-[#1d1d41]">{legend.title}</span>
    </div>
  ))}
</div>
)
