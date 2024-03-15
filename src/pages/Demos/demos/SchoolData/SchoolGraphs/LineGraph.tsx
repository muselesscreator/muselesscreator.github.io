import usePlotDims from './usePlotDims';
import Plot from './Plot';
import PlotProps from './types';
import SchoolData from '../types';

type LineGraphProps = PlotProps & { schools: SchoolData[] };

const LineGraph = (props: LineGraphProps) => {
  const {
    x,
    y ,
    z,
    origin,
  } = usePlotDims(props);
  if (!z) {
    return null;
  }
  const data = props.data as [number, number, number][];
  const points = [
    origin,
    ...data.map((d) => (
      [x(d[0]), y(d[1])]
    )),
    [data[data.length - 1][0], origin[1]],
    origin,
  ];
  const pointsString = points.map(p => p.join(',')).join(' ');
  return (
    <>
      <Plot {...props}>
        <polygon points={pointsString} fill="rgba(0, 0, 200, 0.2)" />
        {data.map((d, i) => (
          <circle
            key={i}
            cx={x(d[0])}
            cy={y(d[1])}
            fill={z(d[2])}
            r={3}
          />
        ))}
        {data.map((d) => (
          <line
            x1={x(d[0])}
            y1={y(d[1])}
            x2={x(d[0])}
            y2={origin[1]}
            stroke={z(d[2])}
          />
        ))}
        {data.map((d, i) => (i <= data.length - 2) && (
          <line
            key={i}
            x1={x(d[0])}
            y1={y(d[1])}
            x2={x(data[i + 1][0])}
            y2={y(data[i + 1][1])}
            stroke={z(d[2])}
          />
        ))}
      </Plot>
    </>
  );
}

export default LineGraph
