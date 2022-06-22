import styled from "styled-components";

const Paragraph = styled.p`
  font-size: 18px;
  margin-top: 1rem;
  margin-bottom: 2rem;
  font-weight: 400;

  color: ${(props) =>
    props.theme.colors[props.variant] || props.theme.colors["grey"]};
`;

export default Paragraph;
