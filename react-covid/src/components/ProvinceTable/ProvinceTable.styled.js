import styled from "styled-components";

const StyledProvinceTable = styled.section`
  /* Small Screen */
  margin: 5rem 0;
  text-align: center;

  .provinceTable__container {
    height: 285px;
    overflow: auto;
    margin: 1rem auto;
  }

  /* Large Screen */
  @media(min-width: 992px) {
    .provinceTable__container {
      width: 800px;
    }
  }
`;

export default StyledProvinceTable;
