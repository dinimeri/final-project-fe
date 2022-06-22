import styled from "styled-components";

const StyledNavbar = styled.nav`
  /* Small Screen */
  display: flex;
  background-color: #18F2B2;
  color: #fff;
  padding: 1rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 25px;
    cursor: pointer;
    border: none;
    background: none;
    color: #fff;
  }

  .navbar__list {
    display: none;
    list-style: none;
    font-size: 16px;
  }

  .navbar__listActive {
    background-color: #18F2B2;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    height: 250px;
    position: absolute;
    align-items: center;
    top: 65px;
    left: 0;
    list-style: none;
    z-index: 1;
  }

  li a {
    margin-bottom: 1rem;
    color: #fff;
    text-decoration: none;
  }

  li a:hover {
    color: #1C3041;
  }

  /* Medium Screen */
  @media(min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    button {
      display: none;
    }

    .navbar__list {
      display: flex;
      flex-direction: row;
    }

    li {
      margin: 0 1rem;
    }
  }
`;

export default StyledNavbar;
