import React, { FormEvent, useState, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Error, Form, Repositories, Title } from './styles';
import logo from '../../assets/logo.svg';
import api from '../../service/api';
import { RepositoryModel } from '../../model/repository.model';

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState<RepositoryModel[]>(() => {
    const storagedRepositories = localStorage.getItem(
      '@ExplorerGitHub:repositories',
    );
    if (storagedRepositories) return JSON.parse(storagedRepositories);
    return [];
  });
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');

  useEffect(() => {
    localStorage.setItem(
      '@ExplorerGitHub:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLInputElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setInputError('Enter the author/name of the repository');
      return;
    }

    try {
      const res = await api.get<RepositoryModel>(`repos/${newRepo}`);
      const repository = res.data;

      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
    } catch (err) {
      setInputError('Error!! Repository not found');
    }
  }

  return (
    <>
      <img src={logo} alt="Explorer GitHub" />
      <Title>Explore repositories on GitHub</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          placeholder="Type it the name of repository"
          type="text"
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
        />

        <button type="submit">Search</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map((repo) => (
          <Link key={repo.id} to={`/repository/${repo.full_name}`}>
            <img src={repo.owner.avatar_url} alt={repo.owner.login} />
            <div>
              <strong>{repo.full_name}</strong>
              <p>{repo.description}</p>
            </div>

            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
