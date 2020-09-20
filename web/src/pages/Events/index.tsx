import React from 'react';
import { RiFileAddLine, AiOutlineDelete, BiEdit } from 'react-icons/all';

import PageHeader from '../../components/PageHeader';

import './styles.css';

function Events() {

  const cards = [
    {
      Title: "Pré-natal",
    },
    {
      Title: "Doação de sangue",
    },
    {
      Title: "Doação de sangue",
    },
    {
      Title: "Vacinação da Febre Amarela",
    },
    {
      Title: "Exame de próstata gratuito",
    },
    {
      Title: "Doação de sangue",
    }
  ];

  return (
    <div id="events-page" className="container">
      <PageHeader title="Events" />

      <main>
        <h1>Verifique seus Eventos <RiFileAddLine/></h1>

        <div className="event-container">

          {cards.map(card => (
            <div className="items-grid">
              <li>
                  <h2>{card.Title}</h2>
                  <span>
                    <a href="#"><BiEdit/></a>
                    <a href="#"><AiOutlineDelete/></a>
                  </span>
              </li>      
          </div>
          ))}
          

        </div>

      </main>
    </div>
  );
}

export default Events;