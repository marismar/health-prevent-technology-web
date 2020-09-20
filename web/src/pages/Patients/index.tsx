import React from 'react';

import PageHeader from '../../components/PageHeader'
import PatientsList from '../../components/PatientsList';

import './styles.css';

function Patients() {
  return (
    <div id="patients-page" className="container">
      <PageHeader title="Patients" />
      <PatientsList />
    </div>
  );
}

export default Patients;