import React from 'react';
import Modal from '@mui/material/Modal';

import { useKeyedState } from '@muselesscreator/use-keyed-state';
import { StrictDict } from '@muselesscreator/strict-dict';

import Select from '~/components/Select';

import data from '../../../data/buildbps.csv';
import loadSchoolData from '../SchoolData/loadSchoolData';

import SchoolCard from './SchoolCard';
import SchoolModal from './SchoolModal';

import './SchoolCards.scss';

const stateKeys = StrictDict({
  selectedSchool: 'selected-school',
  page: 'page',
  programFilter: 'program-filter',
  sortBy: 'sort-by',
  sortDirection: 'sort-direction',
});

const sortByKeys = StrictDict({
  name: 'name',
  grades: 'grades',
});
const sortByLabels = StrictDict({
  [sortByKeys.name]: 'Name',
  [sortByKeys.grades]: 'Grades',
});

const PAGE_SIZE = 9;
const MAX_VISIBLE_PAGES = 10;
const MIN_NEXT_PAGES = 5;

const gradeOrders = [
  'None',
  'K0',
  'K1',
  'K2',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
];

const SchoolCards = () => {
  const { schools, fields } = loadSchoolData(data);
  const programKeys = StrictDict([
    'All',
    ...fields.SMMA_Educational_Program,
  ]);
  const [selectedSchool, setSelectedSchool] = useKeyedState(stateKeys.selectedSchool, null);
  const [page, setPage] = useKeyedState(stateKeys.page, 0);
  const [programFilter, setProgramFilter] = useKeyedState(stateKeys.programFilter, 'All');
  const [sortBy, setSortBy] = useKeyedState(stateKeys.sortBy, sortByKeys.name);
  const [sortDirection, setSortDirection] = useKeyedState(stateKeys.sortDirection, 'asc');

  const filteredSchools = schools.filter(school => {
    if (school.grades === 'None' || school.educationalProgram === 'Not Assessed') {
      return false;
    }
    if (programFilter === 'All') {
      return true;
    }
    return school.educationalProgram === programFilter;
  });

  const sortByName = (a, b) => {
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
  const sortByGrades = (a, b) => {
    const gradeA = a.grades === 'None' ? 'None' : a.grades.split('-')[0];
    const gradeB = b.grades === 'None' ? 'None' : b.grades.split('-')[0];
    const aValue = gradeOrders.indexOf(gradeA);
    const bValue =gradeOrders.indexOf(gradeB);
    if (aValue === bValue) {
      return sortByName(a, b);
    }
    if (sortDirection === 'asc') {
      return aValue > bValue ? 1 : -1;
    }
    return aValue < bValue ? 1 : -1;
  };
  const sortedSchools = filteredSchools.sort((a, b) => {
    if (sortBy === sortByKeys.name) {
      return sortByName(a, b);
    }
    if (sortBy === sortByKeys.grades) {
      return sortByGrades(a, b);
    }
  });
  const pagedSchools = sortedSchools.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);
  const totalSchools = sortedSchools.length;
  const numPages = Math.ceil(totalSchools / PAGE_SIZE);
  const pageMargin = Math.floor(MAX_VISIBLE_PAGES / 2);
  let pages;
  if (numPages <= MAX_VISIBLE_PAGES) {
    pages = Array.from({ length: numPages }).map((_, i) => i);
  } else if (page  - pageMargin < 0) {
    pages = Array
      .from({ length: MAX_VISIBLE_PAGES })
      .map((_, i) => i);
  } else if (page + pageMargin <= numPages) {
    pages = Array
      .from({ length: MAX_VISIBLE_PAGES })
      .map((_, i) => page  - pageMargin + i + 1)
      .filter(i => i >= 0);
  } else {
    pages = Array
      .from({ length: MAX_VISIBLE_PAGES })
      .map((_, i) => numPages - MAX_VISIBLE_PAGES + i)
      .filter(i => i >= 0);
  }

  return (
    <div className="school-cards">
      {selectedSchool && (
        <SchoolModal school={selectedSchool} handleClose={() => setSelectedSchool(null)} />
      )}
      <div className="filters">
        <p style={{ marginBottom: '10px' }}><b>Filters</b></p>
        <Select
          label="Educational Program"
          value={programFilter}
          handleChange={(value) => setProgramFilter(value)}
          options={Object.values(programKeys).map((program) => ({ value: program, label: program }))}
        />
        <Select
          label="Sort By"
          value={sortBy}
          handleChange={(value) => setSortBy(value)}
          options={Object.values(sortByKeys).map((sort, key) => ({ value: sort, label: sortByLabels[sort] }))}
        />
        <Select
          label="Sort Direction"
          value={sortDirection}
          handleChange={(value) => setSortDirection(value)}
          options={[
            { value: 'asc', label: 'Ascending' },
            { value: 'desc', label: 'Descending' },
          ]}
        />
      </div>
      {pagedSchools.map(school => (
        <SchoolCard
          key={school.name}
          school={school}
          setSchool={setSelectedSchool}
        />
      ))}
      <div className="pagination">
        <button
          type="button"
          onClick={() => setPage(0)}
          disabled={page === 0}
        >
          First
        </button>
        <button
          type="button"
          onClick={() => setPage(page - 1)}
          disabled={page === 0}
        >
          Previous
        </button>
        {pages.map((i) => (
          page === i
            ? <span className="selected-page" key={i}>{i + 1}</span>
            : (
              <button
                key={i}
                type="button"
                onClick={() => setPage(i)}
              >
                {i + 1}
              </button>
            )
        ))}
        <button
          type="button"
          onClick={() => setPage(page + 1)}
          disabled={(page + 1) * PAGE_SIZE >= sortedSchools.length}
        >
          Next
        </button>
        <button
          type="button"
          onClick={() => setPage(numPages - 1)}
          disabled={(page + 1) * PAGE_SIZE >= sortedSchools.length}
        >
          Last
        </button>

      </div>
    </div>
  );
};
export default SchoolCards;
