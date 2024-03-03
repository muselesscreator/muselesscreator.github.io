import React from 'react';

const SchoolDetails = ({ school }) => {
  const { studentsByGrade } = school;
  return (
    <div>
      <h5 className="h5">Selected School Details</h5>
      <div style={{ paddingLeft: '1rem' }}>
        <b>Name: </b>{school.name}<br />
        <b>Address: </b>{school.address}<br />
        <b>Educational Program: </b>{school.educationalProgram}<br />
        <b>Total Square Feet: </b>{school.squareFeet}<br />
        <b>Total Students: </b>{school.totalStudents}<br />
        <b>Total Students by Grade: </b>
        <ul style={{ paddingLeft: '1rem' }}>
          { studentsByGrade.preK > 0 && <li><b>Pre-K: </b>{studentsByGrade.preK}</li> }
          { studentsByGrade.k > 0 && <li><b>Kindergarten: </b>{studentsByGrade.k}</li> }
          { studentsByGrade[1] > 0 && <li><b>1st: </b>{studentsByGrade[1]}</li> }
          { studentsByGrade[2] > 0 && <li><b>2nd: </b>{studentsByGrade[2]}</li> }
          { studentsByGrade[3] > 0 && <li><b>3rd: </b>{studentsByGrade[3]}</li> }
          { studentsByGrade[4] > 0 && <li><b>4th: </b>{studentsByGrade[4]}</li> }
          { studentsByGrade[5] > 0 && <li><b>5th: </b>{studentsByGrade[5]}</li> }
          { studentsByGrade[6] > 0 && <li><b>6th: </b>{studentsByGrade[6]}</li> }
          { studentsByGrade[7] > 0 && <li><b>7th: </b>{studentsByGrade[7]}</li> }
          { studentsByGrade[8] > 0 && <li><b>8th: </b>{studentsByGrade[8]}</li> }
          { studentsByGrade[9] > 0 && <li><b>9th: </b>{studentsByGrade[9]}</li> }
          { studentsByGrade[10] > 0 && <li><b>10th: </b>{studentsByGrade[10]}</li> }
          { studentsByGrade[11] > 0 && <li><b>11th: </b>{studentsByGrade[11]}</li> }
          { studentsByGrade[12] > 0 && <li><b>12th: </b>{studentsByGrade[12]}</li> }
          { studentsByGrade.sp > 0 && <li><b>Special Ed: </b>{studentsByGrade.sp}</li> }
        </ul>
      </div>
    </div>
  );
};
export default SchoolDetails;
