import styled from 'styled-components';

export const GameBoard = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
`;

export const Row = styled.div`
  width: 100%;
  height: 33.3%;;
  display: flex;
`;

export const Symbol = styled.div`
  width: 33.3%;
  height: 100%;
  background-color: #FFC600;
  
  &:hover {
    background-color: #65FDF0;
  }
`;
