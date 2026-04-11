import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer>
      <FooterText>
        <p>TASKER © 2026. All rights reserved. </p>
      </FooterText>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100%;
`;

const FooterText = styled.p`
  color: #8c8f94;
  font-size: 14px;
  font-family: "Open Sans", sans-serif;
`;

export default Footer;
