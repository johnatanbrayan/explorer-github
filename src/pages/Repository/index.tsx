import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Header, RepoInfo, Issues } from './styles';

import logo from '../../assets/logo.svg';
import api from '../../service/api';
import { RepositoryModel } from '../../model/repository.model';
import { IssueModel } from '../../model/issue.model';

const Repository: React.FC = () => {
  const { params } = useRouteMatch();
  const [repository, setRepository] = useState<RepositoryModel | null>(null);
  const [issues, setIssues] = useState<IssueModel[]>([]);

  useEffect(() => {
    api
      .get(`/repos/${params.repository}`)
      .then((res) => setRepository(res.data));
    api
      .get(`/repos/${params.repository}/issues`)
      .then((res) => setIssues(res.data));
  }, [params.repository]);

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
            src={repository?.owner.avatar_url}
            alt={repository?.owner.login}
          />
          <div>
            <strong>{repository?.full_name}</strong>
            <p>{repository?.description}</p>
          </div>
        </header>

        <ul>
          <li>
            <strong>{repository?.stargazers_count}</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>{repository?.forks_count}</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>{repository?.open_issues_count}</strong>
            <span>Issues Abertas</span>
          </li>
        </ul>
      </RepoInfo>

      <Issues>
        {issues &&
          issues.map((issue) => (
            <a
              key={issue.id}
              href={issue.html_url}
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <strong>{issue.title}</strong>
                <p>{issue.user.login}</p>
              </div>

              <FiChevronRight size={20} />
            </a>
          ))}
      </Issues>
    </>
  );
};

export default Repository;
