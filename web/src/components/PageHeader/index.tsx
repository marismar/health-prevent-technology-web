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
      <img src={logoImg} alt="Health Prevent Technology"/>
      <div className="details-content">
        <strong>{props.title}</strong>
        <img src={avatarImg} alt="Usuário"/>
      </div>
    </div>    
  );
}

export default PageHeader;