import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>ubuntu</User>@<WebsiteName>terminal.dmario24.store</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
