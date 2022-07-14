import styled from "styled-components";

export const Figure = styled.figure`
  width: 350px;
  height: 350px;
  display: flex;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  img {
    width: 320px;
    height: 320px;
    background-color: #fff;
  }
`;

export const Container = styled.div`
  h2 {
    text-align: center;
    margin-top: 10px;
    color: darkblue;
  }

  div {
    display: flex;
    justify-content: space-around;
    margin-top: 15px;
  }

  div span {
    font-weight: 700;
  }

  button {
    height: 30px;
    width: 150px;
    background-color: darkblue;
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    &:hover {
      filter: brightness(0.6);
    }
  }

  @media (max-width: 768px) {
    width: 380px;
  }
`;
