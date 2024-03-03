import React from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';

import usePlotDims from './usePlotDims';

const Plot = (props) => {
  const {
    data,
    xLabel,
    xLabels,
    yLabel,
    yLabels,
    zLabel,
    width,
    height,
    children,
    colors,
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
  let axisTicks = [];
  let axisLabels = [];
  if (xLabels) {
    const numTicks = xLabels.length;
    axisTicks = axisTicks.concat(xLabels.map((label, i) => ({
      x1: origin[0] + (i * (innerWidth / (numTicks - 1))),
      y1: origin[1] + 15,
      x2: origin[0] + (i * (innerWidth / (numTicks - 1))),
      y2: origin[1] - 10,
    })));
    axisLabels = axisLabels.concat(xLabels.map((label, i) => ({
      x: origin[0] + 4 - (innerWidth / (2 * numTicks)) + (i * (innerWidth / (numTicks - 1))),
      y: origin[1] + 30 + (i % 2 === 0 ? 15 : 0),
      text: label,
    })));
  } else {
    axisTicks = axisTicks.concat(Array(11).fill(0).map((_, i) => ({
      x1: origin[0] + (i * (innerWidth / 10)),
      y1: origin[1] + 15,
      x2: origin[0] + (i * (innerWidth / 10)),
      y2: origin[1] - 10,
    })));
    axisLabels = axisLabels.concat(Array(11).fill(0).map((_, i) => ({
      x: origin[0] + 4 - (innerWidth / 20) + (i * (innerWidth / 10)),
      y: origin[1] + 30 + (i % 2 === 0 ? 15 : 0),
      text: parseInt(x.domain()[0] + (i * (xRange / 10))),
    })));
  }

  if (yLabels) {
  } else {
    axisTicks = axisTicks.concat(Array(11).fill(0).map((_, i) => ({
      x1: origin[0] + 10,
      y1: origin[1] - (i * (innerHeight / 10)),
      x2: origin[0] - 15,
      y2: origin[1] - (i * (innerHeight / 10)),
    })));
    axisLabels = axisLabels.concat(Array(11).fill(0).map((_, i) => ({
      x: origin[0] - 60,
      y: origin[1] - (i * (innerHeight / 10)),
      text: parseInt(y.domain()[1] + (i * (yRange / 10))),
    })));
  }

  axisLabels = axisLabels.concat([
    {
      x: origin[0] + (innerWidth / 2) - 50,
      y: origin[1] + 70,
      text: xLabel,
    },
    {
      x: origin[0] - 70,
      y: origin[1] - (innerHeight / 2) + 50,
      transform: `rotate(-90, ${origin[0] - 70}, ${origin[1] - (innerHeight / 2) + 50})`,
      text: yLabel,
    },
  ]);
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
    >
      {axisLines.map((line, i) => (
        <line
          key={`axis-line-${i}`}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          stroke="white"
        />
      ))}
      {axisTicks.map((tick, i) => (
        <line
          key={`axis-tick-${i}`}
          x1={tick.x1}
          y1={tick.y1}
          x2={tick.x2}
          y2={tick.y2}
          stroke="white"
        />
      ))}
      {axisLabels.map((label, i) => (
        <text
          key={`axis-label-${i}`}
          x={label.x}
          y={label.y}
          transform={label.transform}
          fill="white"
        >
          {label.text}
        </text>
      ))}
      {zLabel && (
        <>
          <defs>
            <linearGradient
              id="z-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor={colors ? colors[0] : "red"} />
              <stop offset="100%" stopColor={colors ? colors[1] : "blue"} />
            </linearGradient>
          </defs>
          <rect x={width - 200} y={50} width={150} height={10} fill="url(#z-gradient)" />
          <text x={width - 200} y={40} fill="white">{zLabel}</text>
          <text x={width - 200} y={75} fill="white">{z.domain()[0]}</text>
          <text x={width - 50} y={75} fill="white">{z.domain()[1]}</text>
        </>
      )}
      {children}
    </svg>
  );
}
Plot.propTypes = {
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string]))).isRequired,
  xLabel: PropTypes.string,
  yLabel: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  marginTop: PropTypes.number,
  marginRight: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  children: PropTypes.node,
};
Plot.defaultProps = {
  xLabel: 'X units',
  yLabel: 'Y units',
  width: 640,
  height: 400,
  marginTop: 80,
  marginRight: 80,
  marginBottom: 80,
  marginLeft: 80,
  children: null,
};

export default Plot
