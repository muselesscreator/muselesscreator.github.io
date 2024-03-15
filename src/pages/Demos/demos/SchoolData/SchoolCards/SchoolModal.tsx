import Modal from '@mui/material/Modal';

import { SchoolData } from '../types';

type SchoolModalProps = {
  school: SchoolData | null;
  handleClose: () => void;
};

const SchoolModal = ({ school, handleClose }: SchoolModalProps) => (
  school === null ? null : (
    <Modal
      open={school !== null}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="school-modal">
        <p className="school-modal__title">{school.name}</p>
        <p className="school-modal__description"><b>Address: </b>{school.address} </p>
        <p className="school-modal__description"><b>{school.neighborhood}</b></p>
        <p className="school-modal__description"><b>Program: </b>{school.educationalProgram}</p>
        <p className="school-modal__description"><b>Total Students: </b>{school.totalStudents}</p>
        <div className="school-modal__description">
          <b>Accessibility</b>
          <ul style={{ marginLeft: '1rem' }}>
            <li><b>Play Areas: </b>{school.accessibility.playAreas}</li>
            <li><b>Parking Quality: </b>{school.accessibility.parkingQuality}</li>
            <li><b>Mass Transit: </b>{school.accessibility.massTransit}</li>
            <li><b>Bikable: </b>{school.accessibility.bikable}</li>
            <li><b>Walkable: </b>{school.accessibility.walkable}</li>
            <li><b>Drop-Off/Pick-Up: </b>{school.accessibility.dropOffPickUp}</li>
            <li><b>ADA Accessibility: </b>{school.accessibility.adaAccessibility}</li>
          </ul>
        </div>
      </div>
    </Modal>
  )
);

export default SchoolModal;
