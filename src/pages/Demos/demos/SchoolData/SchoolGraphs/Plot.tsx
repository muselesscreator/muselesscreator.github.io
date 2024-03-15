
import usePlotData from './usePlotData';
import PlotProps from './types';

const Plot = (props: PlotProps) => {
  const {
    zLabel,
    width = 640,
    height = 400,
    children,
    colors,
  } = props;
  const {
    axisLines,
    axisTicks,
    axisLabels,
    z,
  } = usePlotData(props);
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
      {(zLabel && z) && (
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
};

export default Plot
