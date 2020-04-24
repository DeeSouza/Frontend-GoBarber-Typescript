import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  &:hover {
    span {
      opacity: 1;
    }
  }

  span {
    width: 160px;
    position: absolute;
    background: #ff9000;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.25s ease-out;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);
    color: #312e38;

    &::before {
      content: ' ';
      border-style: solid;
      border-width: 6px 6px 0px 6px;
      border-color: #ff9000 transparent;
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;
