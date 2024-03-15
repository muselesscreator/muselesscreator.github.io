import usePlotDims from './usePlotDims';
import PlotProps, { AxisLabel, AxisTick } from './types';

const usePlotData = (props: PlotProps) => {
  const {
    xLabel,
    xLabels,
    yLabel,
    yLabels,
  } = props;
  const {
    innerHeight,
    innerWidth,
    origin,
    endPoint,
    xRange,
    yRange,
    x,
    y,
    z,
  } = usePlotDims(props);

  const axisLines = [
    { x1: origin[0], y1: origin[1], x2: origin[0], y2: endPoint[1] },
    { x1: origin[0], y1: origin[1], x2: endPoint[0], y2: origin[1] },
  ];
  let axisTicks = [] as AxisTick[];
  let axisLabels = [] as AxisLabel[];
  if (xLabels) {
    const numTicks = xLabels.length;
    const xTickDist = innerWidth / (numTicks - 1);
    const [x0, y0] = origin;
    const newTick = (i: number) => ({
      x1: x0 + (i * xTickDist),
      y1: y0 + 15,
      x2: x0 + (i * xTickDist),
      y2: y0 - 10,
    });
    axisTicks = axisTicks.concat(xLabels.map((_: string, i: number) => newTick(i)));
    axisLabels = axisLabels.concat(xLabels.map((label: string, i: number) => ({
      x: origin[0] + 4 - (innerWidth / (2 * numTicks)) + (i * xTickDist),
      y: origin[1] + 30 + (i % 2 === 0 ? 15 : 0),
      text: label,
    })));
  } else {
    const yTickDist = innerWidth / 10;
    axisTicks = axisTicks.concat(Array(11).fill(0).map((_, i) => ({
      x1: origin[0] + (i * yTickDist),
      y1: origin[1] + 15,
      x2: origin[0] + (i * yTickDist),
      y2: origin[1] - 10,
    })));
    const newLabel = (i: number) => ({
      x: origin[0] + 4 - (innerWidth / 20) + (i * yTickDist),
      y: origin[1] + 30 + (i % 2 === 0 ? 15 : 0),
      text: `${Math.floor(x.domain()[0] + (i * (xRange / 10)))}`,
    });
    axisLabels = axisLabels.concat(Array(11).fill(0).map((_, i) => newLabel(i)));
  }

  if (yLabels) {
    // not used yet
  } else {
    axisTicks = axisTicks.concat(Array(11).fill(0).map((_, i) => ({
      x1: origin[0] + 10,
      y1: origin[1] - (i * (innerHeight / 10)),
      x2: origin[0] - 15,
      y2: origin[1] - (i * (innerHeight / 10)),
    })));
    const newLabel = (i: number) => ({
      x: origin[0] - 60,
      y: origin[1] - (i * (innerHeight / 10)),
      text: `${Math.floor(y.domain()[1] + (i * (yRange / 10)))}`,
    });

    axisLabels = axisLabels.concat(Array(11).fill(0).map((_, i) => newLabel(i)));
  }

  const baseAxisLabels = [{
    x: origin[0] + (innerWidth / 2) - 50,
    y: origin[1] + 70,
    text: xLabel,
  }, {
    x: origin[0] - 70,
    y: origin[1] - (innerHeight / 2) + 50,
    transform: `rotate(-90, ${origin[0] - 70}, ${origin[1] - (innerHeight / 2) + 50})`,
    text: yLabel,
  }] as AxisLabel[];
  axisLabels = axisLabels.concat(baseAxisLabels);
  return {
    axisLines,
    axisTicks,
    axisLabels,
    x,
    y,
    z,
  };
};

export default usePlotData;
