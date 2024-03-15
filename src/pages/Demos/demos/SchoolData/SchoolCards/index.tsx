import SchoolCard from './SchoolCard';
import SchoolModal from './SchoolModal';
import useSchoolCardsData from './useSchoolCardsData';
import SchoolCardFilters from './SchoolCardFilters';
import Pagination from './Pagination';

import './SchoolCards.scss';

const SchoolCards = () => {
  const {
    selectedSchool,
    setSelectedSchool,
    programFilter,
    setProgramFilter,
    sortBy,
    setSortBy,
    sortDirection,
    setSortDirection,
    programKeys,
    page,
    pages,
    schools,
    pageButtons,
  } = useSchoolCardsData();

  return (
    <div className="school-cards">
      {selectedSchool && (
        <SchoolModal school={selectedSchool} handleClose={() => setSelectedSchool(null)} />
      )}
      <SchoolCardFilters
        {...{
          programFilter,
          setProgramFilter,
          sortBy,
          setSortBy,
          sortDirection,
          setSortDirection,
          programKeys,
        }}
      />
      {schools.map(school => (
        <SchoolCard
          key={school.name}
          school={school}
          setSchool={setSelectedSchool}
        />
      ))}
      <Pagination {...{ page, pages, pageButtons }} />
    </div>
  );
};
export default SchoolCards;
