import styled from "styled-components";

export const Header = styled.header`
  background: #1a1d24;
  color: #f2f3f4;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    span {
      color: orange;
    }

    h1 {
      letter-spacing: 1px;
      font-size: 32px;
      margin: 0;
      color: #fff;
    }
  }
`;

export const TodoContainer = styled.section`
  width: 60vw;
  margin: 20px auto;
`;

export const FormContainer = styled.section`
  width: 60vw;
  margin: 20px auto 0 auto;
  display: flex;
  justify-content: center;
	box-shadow: box-shadow: 0 0 2px red;
	padding: 2px;

  input {
		padding: 10px;
		font-family: inherit;
		outline: none;
		background: #F2F2F2;
		border: none;
		width: 400px;
	}

	button {
		padding: 10px;
		outline: none;
		background: #F2F2F2;
		border: none;
	}
`;
