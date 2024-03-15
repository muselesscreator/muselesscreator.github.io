export type PlotData = [number, number][] | [number, number, number][];
export type AxisLabel = { x: number, y: number, text: string, transform?: string };
export type AxisTick = { x1: number, y1: number, x2: number, y2: number };
export type PlotProps = {
  data: PlotData;
  width?: number;
  height?: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
  colors?: string[];
  xLabel?: string;
  yLabel?: string;
  zLabel?: string;
  xLabels?: string[];
  yLabels?: string[];
  children?: React.ReactNode;
}

export type PieData = {
  name: string;
  value: number;
};
export type PieDataShape = {
  baseProps: { handleMouseEnter: () => void, handleMouseLeave: () => void },
  pathProps: { d: string | undefined, fill: string },
  circleProps: { cx: number, cy: number, r: number },
  inflexionLines: { x1: number, y1: number, x2: number, y2: number }[],
  labelProps: { x: number, y: number, textAnchor: string },
  label: string,
};
export type PieChartData = {
  ref: React.RefObject<SVGElement | undefined>;
  shapes: PieDataShape[];
};
export default PlotProps;
