import React from 'react';
import { Link } from 'react-router-dom';
import { RiSearchLine } from 'react-icons/ri';
import { RiCalendarEventLine } from 'react-icons/ri';
import { CgUserList } from 'react-icons/cg';

import PageHeader from '../../components/PageHeader';

import './styles.css';

function Home() {
  return (
    <div id="home-page" className="container">
      <PageHeader title="Home Page" />

      <main>
        <div className="top-bar-content">
          <h1>Welcome, MedCenter</h1>
          <div className="search-container">
            <span> 
              <RiSearchLine size={30} color="#1D2366"/>
            </span>
            <input type="text" placeholder="Search"/>
          </div>
        </div>
        <div className="cards-container">
          <Link to="/patients" className="card-patient-content">
            <RiCalendarEventLine size={70}/>
            Patients
          </Link>
          <Link to="/events" className="card-event-content">
            <CgUserList size={70} />
            Events
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Home;