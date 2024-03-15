import { useKeyedState } from '@muselesscreator/use-keyed-state';
import { StrictDict } from '@muselesscreator/strict-dict';

import { SchoolData } from '../types';
import useSchoolData from '../useSchoolData';

import {
  stateKeys,
  sortByKeys,
  gradeOrders,
} from './constants';

const sortByName = (sortDirection: string) => (a: SchoolData, b: SchoolData) => {
  const aValue = a.name;
  const bValue = b.name;
  if (aValue === bValue) {
    return 0;
  }
  if (sortDirection === 'asc') {
    return aValue > bValue ? 1 : -1;
  }
  return aValue < bValue ? 1 : -1;
};

const sortByGrades = (sortDirection: string) => (a: SchoolData, b: SchoolData) => {
  const gradeA = a.grades === 'None' ? 'None' : a.grades.split('-')[0];
  const gradeB = b.grades === 'None' ? 'None' : b.grades.split('-')[0];
  const aValue = gradeOrders.indexOf(gradeA);
  const bValue =gradeOrders.indexOf(gradeB);
  if (aValue === bValue) {
    return sortByName(sortDirection)(a, b);
  }
  if (sortDirection === 'asc') {
    return aValue > bValue ? 1 : -1;
  }
  return aValue < bValue ? 1 : -1;
};

const useSortedFilteredSchools = () => {
  const schools = useSchoolData();
  const [programFilter, setProgramFilter] = useKeyedState<string>(stateKeys.programFilter, 'All');
  const [sortBy, setSortBy] = useKeyedState<string>(stateKeys.sortBy, sortByKeys.name);
  const [sortDirection, setSortDirection] = useKeyedState<string>(stateKeys.sortDirection, 'asc');

  const programs = schools.reduce((acc, school: SchoolData) => {
    if (!acc.includes(school.educationalProgram)) {
      acc.push(school.educationalProgram);
    }
    return acc;
  }, ['All']);

  const programKeys = StrictDict(programs) as Record<string, string>;


  const filteredSchools = schools.filter(school => {
    if (school.grades === 'None' || school.educationalProgram === 'Not Assessed') {
      return false;
    }
    if (programFilter === 'All') {
      return true;
    }
    return school.educationalProgram === programFilter;
  });

  const sortedSchools = filteredSchools.sort(
    (sortBy === sortByKeys.name) ? sortByName(sortDirection) : sortByGrades(sortDirection)
  );

  return {
    sortedSchools,
    programFilter,
    setProgramFilter,
    programKeys,
    sortBy,
    setSortBy,
    sortDirection,
    setSortDirection,
  };
};

export default useSortedFilteredSchools;
