import React from 'react';
import * as d3 from 'd3';

import usePlotDims from './usePlotDims';
import Plot from './Plot';
import SchoolDetails from './SchoolDetails';

const ScatterPlot = (props) => {
  const { x, y } = usePlotDims(props);
  const [selectedSchool, setSelectedSchool] = React.useState(null);
  return (
    <>
      <Plot {...props}>
        {props.data.map((d, i) => (
          <circle
            key={i}
            cx={x(d[0])}
            cy={y(d[1])}
            r={3}
            fill="white"
            onClick={() => {
              setSelectedSchool(i);
            }}
          />
        ))}
        {selectedSchool !== null && (
          <circle
            cx={x(props.data[selectedSchool][0])}
            cy={y(props.data[selectedSchool][1])}
            r={6}
            fill="none"
            stroke="yellow"
          />
        )}
      </Plot>
      {selectedSchool !== null && <SchoolDetails school={props.schools[selectedSchool]} />}
    </>
  );
}

export default ScatterPlot
