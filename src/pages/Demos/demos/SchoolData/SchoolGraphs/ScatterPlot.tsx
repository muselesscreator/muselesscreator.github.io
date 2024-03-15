import React from 'react';

import usePlotDims from './usePlotDims';
import Plot from './Plot';
import SchoolDetails from './SchoolDetails';
import { SchoolData } from '../types';
import PlotProps from './types';


type ScatterPlotProps = PlotProps & { schools: SchoolData[] };

const ScatterPlot = (props: ScatterPlotProps) => {
  const { x, y } = usePlotDims(props);
  const [selectedSchool, setSelectedSchool] = React.useState<number>();
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
        {selectedSchool && (
          <circle
            cx={x(props.data[selectedSchool][0])}
            cy={y(props.data[selectedSchool][1])}
            r={6}
            fill="none"
            stroke="yellow"
          />
        )}
      </Plot>
      {selectedSchool && <SchoolDetails school={props.schools[selectedSchool]} />}
    </>
  );
}

export default ScatterPlot
