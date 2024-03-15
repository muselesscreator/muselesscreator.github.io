import React from 'react';

import { PieData } from './types';
import usePieChartData from './usePieChartData';

const PieChart = (props: { data: PieData[] }) => {
  const shapeData = usePieChartData(props.data);
  const ref = shapeData.ref as React.RefObject<SVGSVGElement>;
  return (
    <svg viewBox={`0 0 600 300`}>
      <circle cx={250} cy={150} r={102} fill="white" />
      <g
        transform="translate(250, 150)"
        className="container"
        ref={ref}
      >
        {shapeData.shapes.map((shape, i) => (
          <g key={i} className="slice" {...shape.baseProps} >
            <path {...shape.pathProps} />
            <circle {...shape.circleProps} />
            <line {...shape.inflexionLines[0]} stroke="white" fill="white" />
            <line {...shape.inflexionLines[1]} stroke="white" fill="white" />
            <text {...shape.labelProps} dominantBaseline="middle" fill="white" fontSize={10}>
              {shape.label}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}

export default PieChart
