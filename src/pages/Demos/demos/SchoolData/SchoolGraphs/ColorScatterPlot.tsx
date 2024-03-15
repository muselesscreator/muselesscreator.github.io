import React from 'react';

import usePlotDims from './usePlotDims';
import Plot from './Plot';
import SchoolDetails from './SchoolDetails';
import PlotProps from './types';
import { SchoolData } from '../types';

type Props = PlotProps & {
  schools: SchoolData[];
};

const ColorScatterPlot = (props: Props) => {
  const { x, y, z } = usePlotDims(props);
  const data = props.data as [number, number, number][];
  const [selectedSchool, setSelectedSchool] = React.useState<number>();
  const newCircle = (d: [number, number, number], i: number) => (
    <circle
      key={i}
      cx={x(d[0])}
      cy={y(d[1])}
      {...z && { fill: z(d[2]) }}
      r={3}
      onClick={() => {
        setSelectedSchool(i);
      }}
    />
  );
  return (
    <>
      <Plot {...props}>
        {data.map((d, i) => newCircle(d, i))}
        {selectedSchool && (
          <circle
            cx={x(props.data[selectedSchool][0])}
            cy={y(props.data[selectedSchool][1])}
            fill="none"
            stroke="yellow"
            r={6}
          />
        )}
      </Plot>
      {selectedSchool !== undefined && <SchoolDetails school={props.schools[selectedSchool]} />}
    </>
  );
}

export default ColorScatterPlot
