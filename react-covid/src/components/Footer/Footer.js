import Heading from "../ui/Heading";
import StyledFooter from "./Footer.styled";

function Footer() {
  return(
    <>
      <StyledFooter>
        <Heading size="md" variant="light">Covid ID</Heading>
        <Heading as="h4" size="sm" variant="light">©2022 Dini Meriawati</Heading>
      </StyledFooter>
    </>
  );
}

export default Footer;