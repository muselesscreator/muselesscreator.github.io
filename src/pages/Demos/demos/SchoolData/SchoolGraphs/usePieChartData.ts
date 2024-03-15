import React from 'react';
import * as d3 from 'd3';

import { PieData, PieChartData } from './types';

import { colorList } from './colors';

const radius = 100;

const usePieChartData = (data: PieData[]): PieChartData => {
  const ref = React.useRef<SVGElement>();
  const pieGenerator = d3.pie<PieData>().value((d) => d.value);
  const pie = pieGenerator(data);
  const arcGenerator = d3.arc();
  const shapes = pie.map((p, i) => {
    const sliceInfo = {
      innerRadius: 0,
      outerRadius: radius,
      startAngle: p.startAngle,
      endAngle: p.endAngle,
    };
    const centroid = arcGenerator.centroid(sliceInfo);
    const slicePath = arcGenerator(sliceInfo) as string;
    // Second arc is for the legend inflexion point
    const inflexionInfo = {
      innerRadius: radius + 20,
      outerRadius: radius + 20,
      startAngle: p.startAngle,
      endAngle: p.endAngle,
    };
    const inflexionPoint = arcGenerator.centroid(inflexionInfo);

    const isRightLabel = inflexionPoint[0] > 0;
    const labelPosX = inflexionPoint[0] + 40 * (isRightLabel ? 1 : -1);
    const textAnchor = isRightLabel ? "start" : "end";
    const label = p.data.name + " (" + p.value + ")";

    const handleMouseEnter = () => {
      if (ref.current) {
        const el = ref.current as SVGElement;
        el.classList.add('hasHighlight');
      }
    }
    const handleMouseLeave = () => {
      if (ref.current) {
        const el = ref.current as SVGElement;
        el.classList.remove('hasHighlight');
      }
    };
    return {
      baseProps: {
        handleMouseEnter,
        handleMouseLeave,
      },
      pathProps: {
        d: slicePath,
        fill: colorList[i] as string,
      },
      circleProps: {
        cx: centroid[0],
        cy: centroid[1],
        r: 2,
      },
      inflexionLines: [
        { x1: centroid[0], y1: centroid[1], x2: inflexionPoint[0], y2: inflexionPoint[1] },
        { x1: inflexionPoint[0], y1: inflexionPoint[1], x2: labelPosX, y2: inflexionPoint[1] },
      ],
      labelProps: {
        x: labelPosX + (isRightLabel ? 2 : -2),
        y: inflexionPoint[1],
        textAnchor,
      },
      label,
    };
  });
  return { ref, shapes };
}

export default usePieChartData
