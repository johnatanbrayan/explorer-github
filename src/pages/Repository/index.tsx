import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Header, RepoInfo, Issues } from './styles';

import logo from '../../assets/logo.svg';

const Repository: React.FC = () => {
  const { params } = useRouteMatch();

  return (
    <>
      <Header>
        <img src={logo} alt="Explorer Github" />
        <Link to="/">
          <FiChevronLeft />
          Voltar
        </Link>
      </Header>

      <RepoInfo>
        <header>
          <img
            src="https://avatars.githubusercontent.com/u/21340862?s=460&u=aaf7389aa08bf4412aea24f1dc08a9d6de4e74ce&v=4"
            alt="johnatanbrayan1@gmail.com"
          />
          <div>
            <strong>asdfasdfasdgasdf/asdfwlaslkjssd</strong>
            <p>adsfasdfasdfagasdf</p>
          </div>
        </header>

        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues Abertas</span>
          </li>
        </ul>
      </RepoInfo>

      <Issues>
        <Link to="/">
          <div>
            <strong>asdfawffwfwfwff</strong>
            <p>asdfasgqgqg</p>
          </div>

          <FiChevronRight size={20} />
        </Link>

        <Link to="/">
          <div>
            <strong>asdfawffwfwfwff</strong>
            <p>asdfasgqgqg</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
