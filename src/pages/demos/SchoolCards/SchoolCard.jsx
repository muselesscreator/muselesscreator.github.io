import React from 'react';

import './SchoolCards.scss';

const SchoolCard = ({ school, setSchool }) => {
  return (
    <div
      className="school-card"
      onClick={() => setSchool(school)}
    >
      <p className="school-card__title">{school.name}</p>
      <p className="school-card__description">{school.address} ({school.neighborhood})</p>
      <p className="school-card__description">{school.educationalProgram}</p>
    </div>
  );
}

export default SchoolCard;
