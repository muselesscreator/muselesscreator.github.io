import { useKeyedState } from '@muselesscreator/use-keyed-state';

import { SchoolData } from '../types';
import useSortedFilteredSchools from './useSortedFilteredSchools';
import usePaginationData from './usePaginationData';

import { stateKeys } from './constants';

const useSchoolCardsData = () => {
  const {
    sortedSchools,
    programKeys,
    programFilter,
    setProgramFilter,
    sortBy,
    setSortBy,
    sortDirection,
    setSortDirection,
  } = useSortedFilteredSchools();

  const {
    numPages,
    page,
    setPage,
    pages,
    pagedSchools,
    pageButtons,
  } = usePaginationData({ sortedSchools });

  const [selectedSchool, setSelectedSchool] = useKeyedState<SchoolData | null>(
    stateKeys.selectedSchool,
    null,
  );

  const totalSchools = sortedSchools.length;

  return {
    schools: pagedSchools,
    programKeys,
    selectedSchool,
    setSelectedSchool,
    programFilter,
    setProgramFilter,
    sortBy,
    setSortBy,
    sortDirection,
    setSortDirection,
    page,
    setPage,
    pages,
    totalSchools,
    numPages,
    pageButtons,
  };
};

export default useSchoolCardsData;
