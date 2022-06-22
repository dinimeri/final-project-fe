import styled from "styled-components";

const StyledTableBody = styled.tbody`
  /* Small Screen */
  td {
    border: 1px solid #A9A9A9;
    border-collapse: collapse;
    padding: 5px;
    font-size: 12px;
    color: #A9A9A9;
  }

  /* Medium Screen */
  @media(min-width: 768px) {
    td {
      font-size: 16px;
    }
  }
`;

export default StyledTableBody;
