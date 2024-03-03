import React from 'react';
import axios from 'axios';
import { useKeyedState } from '@muselesscreator/use-keyed-state';
import { StrictDict } from '@muselesscreator/strict-dict';

import data from '../../../data/buildbps.csv';

import loadSchoolData from './loadSchoolData';
import ScatterPlot from './ScatterPlot';
import ColorScatterPlot from './ColorScatterPlot';
import LineGraph from './LineGraph';
import PieChart from './PieChart';

const stateKeys = StrictDict({
});

console.log({ data });

const QualityKeys = StrictDict({
  poor: 'Poor',
  deficient: 'Deficient',
  good: 'Good',
  fair: 'Fair',
  excellent: 'Excellent',
});

const SchoolData = () => {
  const { schools, fields } = loadSchoolData(data);
  const validSchools = schools.filter(
    school => school.totalEnergyCost && school.squareFeet && school.totalStudents
  );
  console.log({ schools: validSchools });
  const gsfVsEnergy = validSchools
    .map((school) => [school.squareFeet, school.totalEnergyCost]);
  const gsfVsEnergyByStudents = validSchools
    .map((school) => [school.squareFeet, school.totalEnergyCost, school.totalStudents]);
  const loadStudentsPerGrade = grade => validSchools
    .filter(school => school.studentsByGrade[grade])
    .reduce((acc, school) => {
    // console.log(school.studentsByGrade[grade]);
    return acc + school.studentsByGrade[grade];
  }, 0);
  const schoolsPerType = Object.values(validSchools.reduce((acc, school) => {
    const type = school.typology;
    if (acc[type]) {
      acc[type].value += 1;
    } else {
      acc[type] = { name: type, value: 1 };
    }
    return acc;
  }, {}));
  const loadSchoolsPerGrade = grade => schools.filter(school => school.studentsByGrade[grade]).length;
  const totalStudentsPerGrade = [
    [0, loadStudentsPerGrade('preK'), loadSchoolsPerGrade('preK')],
    [1, loadStudentsPerGrade('k'), loadSchoolsPerGrade('k')],
    [2, loadStudentsPerGrade('1'), loadSchoolsPerGrade(1)],
    [3, loadStudentsPerGrade('2'), loadSchoolsPerGrade(2)],
    [4, loadStudentsPerGrade('3'), loadSchoolsPerGrade(3)],
    [5, loadStudentsPerGrade('4'), loadSchoolsPerGrade(4)],
    [6, loadStudentsPerGrade('5'), loadSchoolsPerGrade(5)],
    [7, loadStudentsPerGrade('6'), loadSchoolsPerGrade(6)],
    [8, loadStudentsPerGrade('7'), loadSchoolsPerGrade(7)],
    [9, loadStudentsPerGrade('8'), loadSchoolsPerGrade(8)],
    [10, loadStudentsPerGrade('9'), loadSchoolsPerGrade(9)],
    [11, loadStudentsPerGrade('10'), loadSchoolsPerGrade(10)],
    [12, loadStudentsPerGrade('11'), loadSchoolsPerGrade(11)],
    [13, loadStudentsPerGrade('12'), loadSchoolsPerGrade(12)],
    [14, loadStudentsPerGrade('sp'), loadSchoolsPerGrade('sp')],
  ];
  console.log({ schoolsPerType });

  const gradeLabels = [
    'Pre-K',
    'K',
    '1st',
    '2nd',
    '3rd',
    '4th',
    '5th',
    '6th',
    '7th',
    '8th',
    '9th',
    '10th',
    '11th',
    '12th',
    'Special Ed',
  ];

  console.log({ gsfVsEnergy });

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
      <PieChart
        data={schoolsPerType}
      />

    </div>
  );
};

export default SchoolData;
