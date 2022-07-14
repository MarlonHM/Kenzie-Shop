import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 320px 320px;
  column-gap: 50px;
  row-gap: 20px;
  margin-top: 15px;
  justify-content: center;

  @media (max-width: 800px) {
    grid-template-columns: 380px;
    justify-content: center;
  }
`;

export const Titulo = styled.h2`
  margin-top: 15px;
`;

export const Resumo = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 1350px) and (max-width: 1560px) {
    width: 1200px;
    justify-content: space-around;
  }

  @media (min-width: 1200px) and (max-width: 1350px) {
    width: 800px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  @media (min-width: 800px) and (max-width: 1200px) {
    width: 700px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 800px) {
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`;

export const Pedido = styled.div`
  margin-top: 20px;
  height: 350px;
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;

  h2 {
    color: darkblue;
    margin-bottom: 20px;
  }

  h4 {
    color: #666;
    margin-bottom: 5px;
  }

  span {
    color: #666;
    font-weight: 700;
    margin-bottom: 10px;
  }

  p {
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 40px;
  }

  button {
    width: 150px;
    height: 40px;
    color: #222;
    background-color: lightgreen;
    font-weight: 700;
    border: none;
    cursor: pointer;
    border-radius: 8px;
    &:hover {
      filter: brightness(0.7);
    }
  }
`;
