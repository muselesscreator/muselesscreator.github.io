import React from 'react';
import * as d3 from 'd3';

import Plot from './Plot';

const usePlotDims = ({
  data,
  width = 640,
  height = 400,
  marginTop = 80,
  marginRight = 80,
  marginBottom = 80,
  marginLeft = 80,
  colors = ["red", "blue"],
}) => {
  let out = {};

  const xExtent = d3.extent(data.map(d => d[0]));
  const x = d3.scaleLinear(xExtent, [marginLeft, width - marginRight]);
  const xRange = xExtent[1] - xExtent[0];

  const yExtent = d3.extent(data.map(d => d[1]));
  const y = d3.scaleLinear([yExtent[1], yExtent[0]], [marginTop, height - marginBottom]);
  const yRange = yExtent[1] - yExtent[0];

  let z;
  if (data[0].length > 2) {
     const zExtent = d3.extent(data.map(d => d[2]));
     z = d3.scaleLinear(zExtent, colors);
  }

  const origin = [marginLeft, height - marginBottom];
  const endPoint = [width - marginRight, marginTop];
  const innerHeight = Math.abs(endPoint[1] - origin[1]);
  const innerWidth = Math.abs(endPoint[0] - origin[0]);
  return ({
    origin,
    endPoint,
    innerWidth,
    innerHeight,
    xRange,
    yRange,
    x,
    y,
    z,
  });
}

export default usePlotDims;
