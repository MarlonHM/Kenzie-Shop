import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1200px;
  margin-top: 30px;

  div {
    position: relative;
  }

  h2 {
    height: 40px;
    color: darkviolet;
    cursor: pointer;
    &:hover {
      filter: brightness(0.7);
    }
  }

  button {
    height: 40px;
    width: 120px;
    margin-right: 5px;
    border: none;
    border-radius: 8px;
    font-size: 20px;
    cursor: pointer;
    color: darkviolet;
    background-color: lightcoral;
    &:hover {
      filter: brightness(0.7);
    }
  }
  span {
    font-size: 12px;
    background-color: #fff;
    color: darkviolet;
    border-radius: 100%;
    padding: 3px;
    position: absolute;
    z-index: 1;
    right: 210px;
    top: 0;
  }

  @media (min-width: 950px) and (max-width: 1560px) {
    width: 1200px;
    justify-content: space-around;
  }

  @media (min-width: 768px) and (max-width: 950px) {
    width: 800px;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 768px) {
    width: 380px;
    flex-direction: column;
    align-items: center;
  }
`;
