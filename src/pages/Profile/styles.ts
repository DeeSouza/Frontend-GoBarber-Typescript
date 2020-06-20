import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  > header {
    height: 144px;
    background-color: #28262e;
    display: flex;
    align-items: center;

    div {
      max-width: 1120px;
      margin: 0 auto;
      width: 100%;

      svg {
        color: #999591;
        width: 24px;
        height: 24px;
        transition: all 0.25s ease-out;

        &:hover {
          opacity: 0.5;
        }
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: -176px auto;

  form {
    margin: 80px 0px;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
      font-size: 20px;
      text-align: left;
    }

    a {
      color: #f4ede8;
      margin-top: 24px;
      display: block;
      text-decoration: none;
      transition: all 0.25s ease-out;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }

    hr {
      background-color: transparent;
      padding: 10px 0px;
      border: 0;
    }
  }
`;

export const AvatarInput = styled.div`
  margin: 0 auto 32px;
  position: relative;
  width: 186px;
  height: 186px;

  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  button {
    position: absolute;
    width: 48px;
    height: 48px;
    background: #ff9000;
    border-radius: 50%;
    right: 0;
    bottom: 0;
    border: none;
    transition: all 0.25s ease;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 20px;
      height: 20px;
      color: #312e38;
    }

    &:hover {
      background-color: ${shade(0.2, '#FF9000')};
    }
  }
`;
