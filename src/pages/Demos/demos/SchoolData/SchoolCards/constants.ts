import { StrictDict } from '@muselesscreator/strict-dict';

import './SchoolCards.scss';

export const stateKeys = StrictDict({
  selectedSchool: 'selected-school',
  page: 'page',
  programFilter: 'program-filter',
  sortBy: 'sort-by',
  sortDirection: 'sort-direction',
}) as Record<string, string>;

export const sortByKeys = StrictDict({
  name: 'name',
  grades: 'grades',
}) as Record<string, string>;

export const sortByLabels = StrictDict({
  [sortByKeys.name]: 'Name',
  [sortByKeys.grades]: 'Grades',
}) as Record<string, string>;

export const PAGE_SIZE = 9;
export const MAX_VISIBLE_PAGES = 10;

export const gradeOrders = [
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

export default {
  gradeOrders,
  MAX_VISIBLE_PAGES,
  PAGE_SIZE,
  stateKeys,
  sortByKeys,
  sortByLabels,
}
