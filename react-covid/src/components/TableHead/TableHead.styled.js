import styled from "styled-components";

const StyledTableHead = styled.thead`
  /* Small Screen */
  th {
    border: 1px solid #A9A9A9;
    border-collapse: collapse;
    padding: 5px 25px;
    font-size: 12px;
    color: #18F2B2;
    font-weight: 700;
  }

  /* Medium Screen */
  @media(min-width: 768px) {
    th {
      font-size: 16px;
    }
  }
`;

export default StyledTableHead;
