import Select from '~/components/Select';

import {
  sortByKeys,
  sortByLabels,
} from './constants';

type SchoolCardFiltersProps = {
  programFilter: string,
  setProgramFilter: (value: string) => void,
  sortBy: string,
  setSortBy: (value: string) => void,
  sortDirection: string,
  setSortDirection: (value: string) => void,
  programKeys: Record<string, string>,
};

type ChangeHandler = (value: unknown) => void;

const SchoolCardFilters = ({
  programFilter,
  setProgramFilter,
  sortBy,
  setSortBy,
  sortDirection,
  setSortDirection,
  programKeys,
}: SchoolCardFiltersProps) => (
  <div className="filters">
    <p style={{ marginBottom: '10px' }}><b>Filters</b></p>
    <Select
      label="Educational Program"
      value={programFilter}
      handleChange={((value: string) => setProgramFilter(value)) as ChangeHandler}
      options={Object.values(programKeys).map((program) => ({ value: program, label: program }))}
    />

    <Select
      label="Sort By"
      value={sortBy}
      handleChange={((value: string) => setSortBy(value)) as ChangeHandler}
      options={Object.values(sortByKeys).map((sort) => ({ value: sort, label: sortByLabels[sort] }))}
    />

    <Select
      label="Sort Direction"
      value={sortDirection}
      handleChange={((value: string) => setSortDirection(value)) as ChangeHandler}
      options={[
        { value: 'asc', label: 'Ascending' },
        { value: 'desc', label: 'Descending' },
      ]}
    />
  </div>
);

export default SchoolCardFilters;
