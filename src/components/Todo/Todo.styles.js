import styled from "styled-components";

export const TodoWrapper = styled.div`
  margin: 10px;
  box-shadow: 0 0 5px #f3f3f3;
  padding: 15px;
  position: relative;

  p {
    margin: 0;
    font-size: 20px;
  }

  div {
    display: flex;
    font-size: 20px;
    position: absolute;
    top: 10px;
    right: 10px;
  }

  div > * {
    margin-left: 5px;
  }
`;
