import React from 'react';

import './styles.css';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <h1>{props.title}</h1>
  );
}

export default PageHeader;