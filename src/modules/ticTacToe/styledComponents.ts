import styled from 'styled-components';

interface IRow {
    row?: 'mid';
}

interface ISymbol {
    elementIndex: number;
}

export const GameBoard = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
`;

export const Row = styled.div<IRow>`
  width: 100%;
  height: 33.3%;;
  display: flex;
  ${props => props.row === 'mid' &&
      `border-top: 2px solid black;
       border-bottom: 2px solid black;
  `}};
`;

export const Symbol = styled.div<ISymbol>`
  width: 33.3%;
  height: 100%;
  font-size: 10em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFC600;
  ${props => props.elementIndex === 1 &&
    `border-left: 2px solid black;
     border-right: 2px solid black;
  `}};
  
  &:hover {
    opacity: 0.6;
  }
`;
