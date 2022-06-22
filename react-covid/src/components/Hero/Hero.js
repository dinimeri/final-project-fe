import heroimage from "../../assets/images/undraw_medical_research_qg4d.png";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import Image from "../ui/Image";
import StyledHero from "./Hero.styled";

function Hero() {
  return (
    <>
      <StyledHero>
        <div className="hero__left">
          <Heading>Covid ID</Heading>
          <Heading as="h4" size="sm" variant="secondary">Monitoring Perkembangan Covid</Heading>
          <Paragraph>Website monitoring perkembangan Covid-19 di Indonesia dan Global</Paragraph>
          <Button as="a" href="https://vaksin.kemkes.go.id/#/vaccines" target="_blank">Vaccine</Button>
        </div>
        <div className="hero__right">
          <Image src={heroimage} alt="medical research illustration" />
        </div>
      </StyledHero>
    </>
  );
}

export default Hero;
