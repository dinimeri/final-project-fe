import styled from "styled-components";

const StyledHero = styled.section`
  /* Small Screen */
  margin: 5rem auto;
  display: flex;
  text-align: center;

  .hero__left {
    padding: 1rem;
  }

  .hero__right {
    display: none;
  }

  /* Medium Screen */
  @media(min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      text-align: left;

    .hero__left {
      flex-basis: 40%;
    }

    .hero__right {
      display: block;
      flex-basis: 60%;
    }
  }
`;

export default StyledHero;
