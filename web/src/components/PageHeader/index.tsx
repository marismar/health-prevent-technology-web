import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo-header.svg';
import avatarImg from '../../assets/images/avatar.jpg';

import './styles.css';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <div className="page-header">
      <Link to="/home">
        <img src={logoImg} alt="Health Prevent Technology"/>
      </Link>      
      <div className="details-content">
        <strong>{props.title}</strong>
        <Link to="/">
          <img src={avatarImg} alt="Usuário"/>
        </Link>
      </div>
    </div>    
  );
}

export default PageHeader;