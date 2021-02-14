import React from 'react';
import { useRouteMatch } from 'react-router-dom';

const Repository: React.FC = () => {
  const { params } = useRouteMatch();

  return <h1>{`Repository: ${params.repository}`}</h1>;
};

export default Repository;
