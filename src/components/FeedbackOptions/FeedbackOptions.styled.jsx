import styled from "styled-components";

export const BtnCont = styled.div`

  display: flex;
  margin: auto;
  gap: 10px;
`;

export const Btn = styled.button`
font-family: cursive;
  font-size: 16px;
  color: #fff;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const GoodBtn = styled(Btn)`
  background-color: green;
`;

export const NeutralBtn = styled(Btn)`
  background-color: yellow;
  color: #4B0082;
`;

export const BadBtn = styled(Btn)`
  background-color: red;
`;