import Select from '~/components/Select';
import { StrictDict } from '@muselesscreator/strict-dict';

import FilterButton from './FilterButton';
import { ProjectCategories } from './data';

type ProjectFiltersProps = {
  projectFilter: string;
  handleCategoryChange: (category: string) => () => void;
  handleFilterChange: (value: unknown) => void;
};

export const filterOptions = [
  { label: ProjectCategories.all, value: ProjectCategories.all },
  { label: ProjectCategories.public, value: ProjectCategories.public },
  { label: ProjectCategories.openSource, value: ProjectCategories.openSource },
];

export const categories = [
  ProjectCategories.all,
  ProjectCategories.public,
  ProjectCategories.openSource,
];

export const classNames = StrictDict({
  list: 'filter-list',
  selectBox: 'filter-select-box',
}) as Record<string, string>;

const ProjectFilters = ({
  projectFilter,
  handleCategoryChange,
  handleFilterChange,
}: ProjectFiltersProps) => {
  return (
    <div>
      <ul className={classNames.list}>
        {categories.map((category) => (
          <FilterButton
            key={category}
            isActive={projectFilter === category}
            handleFilterChange={handleCategoryChange}
            filter={category}
          />
        ))}
      </ul>
      <div className={classNames.selectBox}>
        <Select
          label="Select category"
          options={filterOptions}
          value={projectFilter}
          handleChange={handleFilterChange}
        />
      </div>
    </div>
  );
};

export default ProjectFilters;
