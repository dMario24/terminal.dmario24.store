import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>terminal</User>@<WebsiteName>dmario24.store</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
