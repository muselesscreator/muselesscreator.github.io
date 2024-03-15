import { useKeyedState } from '@muselesscreator/use-keyed-state';

import { SchoolData } from '../types';

import {
  stateKeys,
  PAGE_SIZE,
  MAX_VISIBLE_PAGES,
} from './constants';

const usePaginationData = ({ sortedSchools }: { sortedSchools: SchoolData[] }) => {
  const [page, setPage] = useKeyedState<number>(stateKeys.page, 0);
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


  return {
    pages,
    page,
    setPage,
    pagedSchools,
    numPages,
    pageButtons: {
      first: {
        onClick: () => setPage(0),
        disabled: page === 0,
      },
      prev: {
        onClick: () => setPage(page - 1),
        disabled: page === 0,
      },
      next: {
        onClick: () => setPage(page + 1),
        disabled: (page + 1) * PAGE_SIZE >= totalSchools,
      },
      last: {
        onClick: () => setPage(numPages - 1),
        disabled: (page + 1) * PAGE_SIZE >= totalSchools,
      },
      target: (i: number) => ({
        onClick: () => setPage(i),
      }),
    },
  };
};

export default usePaginationData;
