import styled from 'styled-components';

export const DrawerContant = styled.div`
  width:100%;
  display:flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;

  h2 {
    color: var(-color-primary-darker);
    padding: 24px;
    font-size: 24px;
  }

  p {
    font-size: 20px;
    padding: 24px;
    
    strong {
      color: #1D2366;
    }
  }

  button {
    display: flex;
    padding: 16px;
    border:none;
    border-radius: 8px;
    
    width: 150px;
    margin: auto;
    color: white;
    align-items: center;
    justify-content: center;

    &:hover{
      opacity: 0.8;
      transition: .3s;
    }

    &#whatsapp {
      background-color: #28df99;
    }

    &#sms {
      background-color: #EE6C4D;
    }

    &#call {
      background-color: #9d65c9;
    }

    svg {
      margin-left: 5px;
    }
  }
`;


export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5.6rem 6.6rem 0 7.6rem;
  
  h1 {
    font-weight: 400;
    font-size: 5.2rem;
  }
`;

export const SearchBar = styled.div`
  width: 50rem;
  margin: 1.4rem;
  display: flex;
  align-items: center;
  background: var(--color-background);
  border-bottom: 3px solid var(--color-primary-dark);

  span {
    display: flex;
    text-align: center;
    justify-content: center;
    padding-left: 3.2rem;
  }

  input {
    display: flex;
    text-align: center;
    justify-content: center;
    text-align: initial;
    font-size: 2.2rem;
    font-weight: lighter;
    line-height: 6.8rem;
    border: none;
    padding-left: 3.2rem;
    outline: none;
    width: 50rem;
  }
`;

export const Main = styled.main`
  align-items: center;
  margin: auto;
  
  h1 svg {
    margin-left: 14px;
  }

  .event-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 24px;
    margin-top: 54px;
    margin-left: 150px;
  }

  .items-grid h2 {
    font-size: 30px;
    color: #FFFFFF;
  }

  .items-grid {
    display: flex;
    grid-template: 1fr 1fr 1fr;
    gap: 24px;
    color: #FFFFFF;

    h2 {
      position: relative;
      right: 10%;
      top: -10%;
    }

    li {
      background-color: var(--color-primary-dark);
      border-radius: 20px;
      list-style-type: none;

      border: 2px solid var(--color-primary-dark);
      height: 180px;
      width: 400px;

      padding: 32px 24px 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      text-align: center;
      cursor: pointer;

      &:hover {
        background-color: #1d2d50;
        border: 2px solid #EE6C4D;
        transition: .3s;
      }

    }

    span {
      position: relative;
      left: 40%;
    }

    a {
      color: var(--color-header);
      
      &:hover {
        color: var(--color-secundary);
      }
    }

    svg {
      height: 2em;
      width: 40px;
    }

  }

`;

export const SendEvents = styled.div`
  display: flex;
`;