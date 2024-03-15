import ScatterPlot from './ScatterPlot';
import ColorScatterPlot from './ColorScatterPlot';
import LineGraph from './LineGraph';
import PieChart from './PieChart';
import useSchoolGraphsData from './useSchoolGraphsData';

import { gradeLabels } from './constants';

const SchoolGraphs = () => {
  const {
    schools,
    gsfVsEnergy,
    gsfVsEnergyByStudents,
    totalStudentsPerGrade,
    schoolsPerType,
  } = useSchoolGraphsData();
  return (
    <div className="school-data">
      <h3 className="h3">Boston Public Schools Data</h3>
      <h4 style={{ textAlign: 'center' }} className="h4">Square Feet vs Energy Usage</h4>
      <p>Click on a point to see the school details</p>
      <ScatterPlot
        data={gsfVsEnergy}
        xLabel="Square Feet"
        yLabel="Energy Bill Cost ($)"
        schools={schools}
      />
      <hr />
      <h4 style={{ textAlign: 'center' }} className="h4">Square Feet vs Energy Usage by Total Students</h4>
      <p>Click on a point to see the school details</p>
      <ColorScatterPlot
        data={gsfVsEnergyByStudents}
        xLabel="Square Feet"
        yLabel="Energy Bill Cost ($)"
        zLabel="Total Students"
        colors={['red', 'blue']}
        schools={schools}
      />
      <hr />
      <h4 style={{ textAlign: 'center' }} className="h4">Total Students per grade</h4>
      <LineGraph
        data={totalStudentsPerGrade}
        xLabel="Grade"
        yLabel="Total Students"
        xLabels={gradeLabels}
        zLabel="Number of Schools"
        colors={['red', 'blue']}
        schools={schools}
      />
      <hr />
      <h4 style={{ textAlign: 'center' }} className="h4">Schools per Type</h4>
      <PieChart data={schoolsPerType} />
    </div>
  );
};

export default SchoolGraphs;
