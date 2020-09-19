import React from 'react';

import PageHeader from '../../components/PageHeader';

import './styles.css';

function Home() {
  return (
    <div id="home-page" className="container">
      <PageHeader title="Home" />

      <main>
        <h1>Conteudo da página</h1>
      </main>
    </div>
  );
}

export default Home;