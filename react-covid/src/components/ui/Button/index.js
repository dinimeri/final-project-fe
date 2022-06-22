import styled, { css } from "styled-components";

const Button = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 10px;
  color: #fff;
  background-color: #18F2B2;
  cursor: pointer;
  font-size: 18px;

  ${(props) => props.full && css`
    display: block;
    width:100%
  `}
`;

export default Button;