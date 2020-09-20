import React from 'react';
import styled from 'styled-components';
import { AiOutlineDelete, BiEdit, RiSearchLine, BiSend, FiPhoneCall, AiOutlineWhatsApp } from 'react-icons/all';

// Import from material UI
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Divider from '@material-ui/core/Divider';

import PageHeader from '../../components/PageHeader';
import { DrawerContant, SearchBar, TopBar, Main, SendEvents } from './style';
import api from '../../services/api';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

type Anchor = 'top' | 'left' | 'bottom' | 'right';

// By doing this you can edit SwipeableDrawer component or anything else from material UI
const StyledDrawer = styled(SwipeableDrawer)`
  /* Select the class or container you want to edit properties */
  .MuiDrawer-paper { 
    width: 50%;
  }
  .makeStyles-list-1 {
    width: 100%;
    height: 100%;
  }
`;

function Events() {

  let cards = [];
  for (let i=0; i < 9; i++){
    cards.push({Title: "Doação de sangue"});
  }

  const classes = useStyles();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  // Component that will be render in the Drawer
  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <DrawerContant>
        <h2>Informações Gerais</h2>

        <Divider />

        <p>
          <strong>Nome do evento: </strong> 
          Acompenhamento de diabéticos.
          <br/>
          <strong>Descrição: </strong> 
          Descrição do evento.
        </p>

        <Divider />

        <p>
          <strong>Período: </strong> 
          Acompenhamento de diabéticos.
          <br/>
          
          <strong>Frequência: </strong> 
          Descrição do evento.
          <br/>

          <strong>Data de criação: </strong> 
          Descrição do evento.
        </p>

        <p>
          <strong>Período: </strong> 
          Acompenhamento de diabéticos.
          <br/>
          
          <strong>Frequência: </strong> 
          Descrição do evento.
          <br/>

          <strong>Data de criação: </strong> 
          Descrição do evento.
        </p>

        <p>
          <strong>Mensagem: </strong>
          Conhecer novos amigos, reencontrar os antigos. Mudar de série ou até mesmo de escola. A volta às aulas é realmente um turbilhão de novidades para as crianças. Mas o que não pode faltar são os alimentos saudáveis na hora de montar a lancheira.
          O lanchinho do recreio precisa ser adequado e saudável, assim como a alimentação feita em casa. Para dar certo, o importante é levar em consideração aquilo que a criança gosta e está acostumada a comer. Melhor ainda se ela puder participar da preparação, sentindo-se parte do processo. Essa é uma ótima estratégia para despertar o interesse pelos alimentos.
        </p>
        
        <SendEvents>
          <button id="whatsapp" >
            Whatsapp
            <AiOutlineWhatsApp/>
          </button>

          <button id="sms" onClick={sendMessage}>
            SMS
            <BiSend/>
          </button>

          <button id="call">
            Call 
            <FiPhoneCall/>
          </button>
        </SendEvents>
        
        
      </DrawerContant>
    </div>
  );
  
  interface FormData {
    eventName: string,
    minAge: number,
    maxAge: number,
    clinicalCondition: string,
    message: string,
    company: string, 
  }
  
  async function sendMessage(){
    console.log("Entrou !!!!!!");

    const Data = {
      eventName: "Testing Event Name",
      minAge: 0,
      maxAge: 80,
      clinicalCondition: "hipertensao",
      message: "This is just a payload message",
      company: "Google"
    };

    const response = 
    await api.post('notification/sms/disease', Data)
      .then(res => {
          console.log(res.data);
      })
      .catch((e) =>{
          console.log('Somethinf went worng !');
      });
    
    console.log(response);
  }


  return (

    <div id="events-page" className="container">
      <PageHeader title="Events" />

      <Main>

        <TopBar>
          <h1>Verifique seus Eventos</h1>

          <SearchBar>
            <span> 
              <RiSearchLine size={30} color="#1D2366"/>
            </span>
            <input type="text" placeholder="Search"/>
          </SearchBar>
        </TopBar>
      
        <div className="event-container">
          {cards.map(card => (

            <div className="items-grid">
              <li onClick={toggleDrawer('right', true)}>
                  <h2>{card.Title}</h2>
                  <span>
                    <a href="#"><BiEdit/></a>
                    <a href="#"><AiOutlineDelete/></a>
                  </span>
              </li>      
          </div>
          ))}
        </div>
    
        <div>
          {(['left', 'right', 'top', 'bottom'] as Anchor[]).map((anchor) => (
            <React.Fragment key={anchor}>
              {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
              <StyledDrawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                {list(anchor)}
              </StyledDrawer>
            </React.Fragment>
          ))}
        </div>
         
      </Main>
    </div>
  );
}

export default Events;