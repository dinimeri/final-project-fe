import styled from "styled-components";

const StyledCovidForm = styled.section`
  /* Small Screen */
  display: flex;
  flex-direction: column;
  margin: 5rem 0;

  .form__left {
    display: none;
  }

  .form__right h1 {
    text-align: center;
  }

  .form__group {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }

  /* Medium Screen */
  @media(min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;

    .form__left {
      display: block;
      flex-basis: 60%;
    }

    .form__right {
      flex-basis: 40%;
    }
  }
`;

export default StyledCovidForm;
