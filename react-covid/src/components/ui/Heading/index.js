import styled from "styled-components";

const Heading = styled.h1`
  font-weight: 500;
  color: ${(props) =>
    props.theme.colors[props.variant] || props.theme.colors["primary"]};

  font-size: ${({ size, theme }) =>
    theme.fontSize[size] || theme.fontSize["xl"]};
`;

export default Heading;
