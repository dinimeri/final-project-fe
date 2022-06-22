/* eslint-disable react-hooks/exhaustive-deps */
import Heading from "../ui/Heading";
import Image from "../ui/Image";
import StyledSummary from "./Summary.styled";

function Summary(props) {
  const { title, src } = props;
  return (
    <>
      <StyledSummary>
        <Heading>Summary</Heading>
        <Heading as="h4" size="sm" variant="secondary">Grafik Data Covid {title}</Heading>
        <div>
         <Image src={src} alt="" />
        </div>
      </StyledSummary>
    </>
  );
}

export default Summary;