import React, { FormEvent, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Form, Repositories, Title } from './styles';
import logo from '../../assets/logo.svg';
import api from '../../service/api';

interface Repository {
  id?: number;
  name?: string;
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
    repos_url?: string;
  };
}

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [newRepo, setNewRepo] = useState('');

  async function handleAddRepository(
    event: FormEvent<HTMLInputElement>,
  ): Promise<void> {
    event.preventDefault();
    const res = await api.get<Repository>(`repos/${newRepo}`);
    const repository = res.data;

    setRepositories([...repositories, repository]);
    setNewRepo('');
  }

  return (
    <>
      <img src={logo} alt="Explorer GitHub" />
      <Title>Explore repositories on GitHub</Title>

      <Form onSubmit={handleAddRepository}>
        <input
          placeholder="Type it the name of repository"
          type="text"
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
        />

        <button type="submit">Search</button>
      </Form>

      <Repositories>
        {repositories.map((repo) => (
          <a key={repo.id} href="teste">
            <img src={repo.owner.avatar_url} alt={repo.owner.login} />
            <div>
              <strong>{repo.full_name}</strong>
              <p>{repo.description}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
