import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 380px 380px 380px;
  row-gap: 20px;
  margin-top: 30px;

  @media (max-width: 1425px) {
    grid-template-columns: 380px 380px;
  }

  @media (max-width: 800px) {
    grid-template-columns: 380px;
    justify-content: center;
  }
`;
