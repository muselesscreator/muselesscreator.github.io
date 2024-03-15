import useSchoolData from '../useSchoolData';
import { GradeCollection } from '../types';

const useSchoolGraphsData = () => {
  const schools = useSchoolData();
  const validSchools = schools.filter(
    school => school.totalEnergyCost && school.squareFeet && school.totalStudents
  );

  const gsfVsEnergy = validSchools.map((school) => [
    school.squareFeet,
    school.totalEnergyCost,
  ]) as [number, number][];

  const gsfVsEnergyByStudents = validSchools.map((school) => [
    school.squareFeet,
    school.totalEnergyCost,
    school.totalStudents,
  ]) as [number, number, number][];

  const loadStudentsPerGrade = (grade: keyof GradeCollection) => validSchools
    .filter(school => school.studentsByGrade[grade])
    .reduce((acc, school) => {
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
  }, {} as { [key: string]: { name: string; value: number } }));
  const loadSchoolsPerGrade = (grade: keyof GradeCollection) =>
    schools.filter(school => school.studentsByGrade[grade]).length;
  const totalStudentsPerGrade = [
    [0, loadStudentsPerGrade('preK'), loadSchoolsPerGrade('preK')],
    [1, loadStudentsPerGrade('k'), loadSchoolsPerGrade('k')],
    [2, loadStudentsPerGrade('1'), loadSchoolsPerGrade('1')],
    [3, loadStudentsPerGrade('2'), loadSchoolsPerGrade('2')],
    [4, loadStudentsPerGrade('3'), loadSchoolsPerGrade('3')],
    [5, loadStudentsPerGrade('4'), loadSchoolsPerGrade('4')],
    [6, loadStudentsPerGrade('5'), loadSchoolsPerGrade('5')],
    [7, loadStudentsPerGrade('6'), loadSchoolsPerGrade('6')],
    [8, loadStudentsPerGrade('7'), loadSchoolsPerGrade('7')],
    [9, loadStudentsPerGrade('8'), loadSchoolsPerGrade('8')],
    [10, loadStudentsPerGrade('9'), loadSchoolsPerGrade('9')],
    [11, loadStudentsPerGrade('10'), loadSchoolsPerGrade('10')],
    [12, loadStudentsPerGrade('11'), loadSchoolsPerGrade('11')],
    [13, loadStudentsPerGrade('12'), loadSchoolsPerGrade('12')],
    [14, loadStudentsPerGrade('sp'), loadSchoolsPerGrade('sp')],
  ] as [number, number, number][];
  return {
    schools,
    gsfVsEnergy,
    gsfVsEnergyByStudents,
    schoolsPerType,
    totalStudentsPerGrade,
  }

};

export default useSchoolGraphsData;
