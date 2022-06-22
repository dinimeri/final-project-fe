/* eslint-disable react-hooks/exhaustive-deps */
import Card from "../ui/Card";
import Heading from "../ui/Heading";
import StyledCovidCase from "./CovidCase.styled";

function CovidCase(props) {
  const { title, confirmed, recovered, deaths} = props;
  return (
    <>
      <StyledCovidCase>
        <Heading>{title}</Heading>
        <Heading as="h4" size="sm" variant="secondary">Perkembangan Data Covid {title}</Heading>
        <div className="covidCase__container">
          <Card>
            <Heading as="h2" size="md" variant="dark">Confirmed</Heading>
            <Heading size="lg">{confirmed}</Heading>
          </Card>
          <Card>
            <Heading as="h2" size="md" variant="dark">Recovered</Heading>
            <Heading size="lg" variant="secondary">{recovered}</Heading>
          </Card>
          <Card>
            <Heading as="h2" size="md" variant="dark">Death</Heading>
            <Heading size="lg" variant="danger">{deaths}</Heading>
          </Card>
        </div>
      </StyledCovidCase>
    </>
  );
}

export default CovidCase;