import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const Ls: React.FC = () => {
  return (
    <AboutWrapper data-testid="ls">
      <p>
        Hi, my name is <HighlightSpan>Sat Naing</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a full-stack developer</HighlightAlt> based in Yangon,
        Myanmar.
      </p>
      <p>
        I am passionate about writing codes and <br />
        developing web applications to solve real-life challenges.
      </p>
    </AboutWrapper>
  );
};

export default Ls;
