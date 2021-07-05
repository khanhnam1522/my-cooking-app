import { FooterSection, FooterContainer, FooterCopyRight } from "./styles";
function Footer() {
  return (
    <div>
      <FooterSection>
        <FooterContainer>
          <FooterCopyRight>
            &copy; Copyright 2021, Crafted with ♥ by Nam Tang.
          </FooterCopyRight>
        </FooterContainer>
      </FooterSection>
    </div>
  );
}

export default Footer;
