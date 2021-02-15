import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #3a3a3a;
    transition: color 0.4s;
    color: #a8a8b1;

    &:hover {
      color: #665;
    }
  }
`;

export const RepoInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      border-radius: 50%;
      width: 120px;
    }

    div {
      padding-left: 30px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    margin-top: 40px;
    list-style-type: none;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
`;

export const Issues = styled.section`
  margin-top: 45px;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    background: #fff;
    width: 100%;
    padding: 24px;
    border-radius: 5px;
    transition: transform 0.2s;

    & + a {
      margin-top: 20px;
    }

    &:hover {
      transform: translateX(15px);
    }

    div {
      // margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }

      svg {
        margin-left: auto;
        color: #cbcbd6;
      }
    }
  }
`;
