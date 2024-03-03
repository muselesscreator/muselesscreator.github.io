import React from 'react';
import * as d3 from 'd3';

import usePlotDims from './usePlotDims';
import Plot from './Plot';
import SchoolDetails from './SchoolDetails';

import { colorList } from './colors';
import './ScatterPlot.css';

const radius = 100;

const ScatterPlot = (props) => {
  const ref = React.useRef(null);
  const [selectedSchool, setSelectedSchool] = React.useState(null);
  const pieGenerator = d3.pie().value((d) => d.value);
  console.log({ data: props.data });
  const pie = pieGenerator(props.data);
  console.log({ pie });
  const arcGenerator = d3.arc();
  const shapes = pie.map((p, i) => {
    const sliceInfo = {
      innerRadius: 0,
      outerRadius: radius,
      startAngle: p.startAngle,
      endAngle: p.endAngle,
    };
    const centroid = arcGenerator.centroid(sliceInfo);
    const slicePath = arcGenerator(sliceInfo);
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

    return (
      <g
        key={i}
        className="slice"
        onMouseEnter={() => {
          if (ref.current) {
            ref.current.classList.add('hasHighlight');
          }
        }}
        onMouseLeave={() => {
          if (ref.current) {
            ref.current.classList.remove('hasHighlight');
          }
        }}
      >
        <path d={slicePath} fill={colorList[i]} />
        <circle cx={centroid[0]} cy={centroid[1]} r={2} />
        <line
          x1={centroid[0]}
          y1={centroid[1]}
          x2={inflexionPoint[0]}
          y2={inflexionPoint[1]}
          stroke="white"
          fill="white"
        />
        <line
          x1={inflexionPoint[0]}
          y1={inflexionPoint[1]}
          x2={labelPosX}
          y2={inflexionPoint[1]}
          stroke="white"
          fill="white"
        />
        <text
          x={labelPosX + (isRightLabel ? 2 : -2)}
          y={inflexionPoint[1]}
          textAnchor={textAnchor}
          dominantBaseline="middle"
          fill="white"
          fontSize={10}
        >
          {label}
        </text>
      </g>
    );
  });

  return (
    <svg viewBox={`0 0 600 300`}>
      <circle cx={250} cy={150} r={102} fill="white" />
      <g
        transform="translate(250, 150)"
        className="container"
        ref={ref}
      >
        {shapes}
      </g>
    </svg>
  );
}

export default ScatterPlot
