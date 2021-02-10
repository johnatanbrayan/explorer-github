import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Form, Repositories, Title } from './styles';
import logo from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Explorer GitHub" />
      <Title>Explore repositories on GitHub</Title>

      <Form>
        <input type="text" placeholder="Type it the name of repository" />
        <button type="submit">Search</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/21340862?s=460&u=aaf7389aa08bf4412aea24f1dc08a9d6de4e74ce&v=4"
            alt="Profile"
          />
          <div>
            <strong>threejs-examples</strong>
            <p>
              A litle projects with some example threejs for study. Focused on
              panorama and virtual tour examples.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/21340862?s=460&u=aaf7389aa08bf4412aea24f1dc08a9d6de4e74ce&v=4"
            alt="Profile"
          />
          <div>
            <strong>threejs-examples</strong>
            <p>
              A litle projects with some example threejs for study. Focused on
              panorama and virtual tour examples.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/21340862?s=460&u=aaf7389aa08bf4412aea24f1dc08a9d6de4e74ce&v=4"
            alt="Profile"
          />
          <div>
            <strong>threejs-examples</strong>
            <p>
              A litle projects with some example threejs for study. Focused on
              panorama and virtual tour examples.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
