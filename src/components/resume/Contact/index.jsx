import React from "react"

import {
  StyledContactSection,
  StyledContactList,
  StyledEmailItem,
  StyledLinkedinItem,
  StyledFacebookItem,
  StyledInstagramItem,
} from "./styles"

import IconFacebook from "./facebook.inline.svg"
import IconInstagram from "./instagram.inline.svg"
import IconLinkedin from "./linkedin.inline.svg"
import IconEmail from "./gmail.inline.svg"

const Contact = React.forwardRef(({ id }, ref) => (
  <StyledContactSection ref={ref}>
    <header id={id}>
      <h2>Contact</h2>
    </header>
    <StyledContactList>
      <StyledEmailItem>
        <a href="mailto:darius@decepulis.com">
          <IconEmail height="2em" />
        </a>
      </StyledEmailItem>
      <StyledLinkedinItem>
        <a href="https://www.linkedin.com/in/decepulis/">
          <IconLinkedin height="2em" />
        </a>
      </StyledLinkedinItem>
      <StyledFacebookItem>
        <a href="https://www.facebook.com/de.cepulis">
          <IconFacebook height="2em" />
        </a>
      </StyledFacebookItem>
      <StyledInstagramItem>
        <a href="https://www.instagram.com/__dardarbinks/">
          <IconInstagram height="2em" />
        </a>
      </StyledInstagramItem>
    </StyledContactList>
  </StyledContactSection>
))

export default Contact
