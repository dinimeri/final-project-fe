import { useState } from "react";
import { Link } from "react-router-dom";
import Heading from "../ui/Heading";
import StyledNavbar from "./Navbar.styled";

function Navbar() {
  const [ isMenuClicked, setIsMenuClicked ] = useState(false);

  const handleClick = () => {
    if (isMenuClicked === false) {
      setIsMenuClicked(true);
    }
    else {
      setIsMenuClicked(false);
    }
  }
  return (
    <>
      <header>
        <StyledNavbar>
          <div>
            <Heading size="lg" variant="light">Covid ID</Heading>
          </div>
          <div>
            <ul className={isMenuClicked ? "navbar__listActive" : "navbar__list"}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/indonesia">Indonesia</Link>
              </li>
              <li>
                <Link to="/provinsi">Provinsi</Link>
              </li>
              <li>
                <Link to="#">About</Link>
              </li>
            </ul>
          <button onClick={handleClick}>
            <i className={isMenuClicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
          </button>
          </div>
        </StyledNavbar>
      </header>
    </>
  );
}

export default Navbar;
