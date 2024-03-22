import classNames from 'classnames';

type FilterButtonProps = {
  isActive: boolean;
  filter: string;
  handleFilterChange: (category: string) => () => void;
};
const FilterButton = ({
  isActive,
  filter,
  handleFilterChange,
}: FilterButtonProps) => {
  return (
    <li className="filter-item">
      <button
        className={classNames({ active: isActive })}
        onClick={handleFilterChange(filter)}
      >
        {filter}
      </button>
    </li>
  );
};
export default FilterButton;
