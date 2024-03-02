import React from 'react';
import * as d3 from 'd3';

const LineGraph = ({
  data,
  width = 640,
  height = 400,
  marginTop = 20,
  marginRight = 20,
  marginBottom = 20,
  marginLeft = 40,
}) => {
  const ref = React.useRef();
  React.useEffect(() => {
    const svgEl = d3.select(ref.current);
    console.log({ data });
    svgEl.selectAll('circle')
      .data(data)
      .join('circle')
        .attr('cx', d => d[0])
        .attr('cy', d => d[1])
        .attr('r', 3);
  }, [data]);
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      ref={ref}
    >
    </svg>
  );
}

export default LineGraph
