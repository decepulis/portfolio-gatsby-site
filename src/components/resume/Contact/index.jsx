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
  <StyledContactSection ref={ref} data-scroll-id={id}>
    <header id={id}>
      <h2>Contact</h2>
    </header>
    <StyledContactList>
      <StyledEmailItem>
        <a href="mailto:darius@decepulis.com">
          <IconEmail aria-hidden="true" focusable="false" height="2em" />
          <span className="visually-hidden">Email</span>
        </a>
      </StyledEmailItem>
      <StyledLinkedinItem>
        <a href="https://www.linkedin.com/in/decepulis/">
          <IconLinkedin aria-hidden="true" focusable="false" height="2em" />
          <span className="visually-hidden">LinkedIn</span>
        </a>
      </StyledLinkedinItem>
      <StyledFacebookItem>
        <a href="https://www.facebook.com/de.cepulis">
          <IconFacebook aria-hidden="true" focusable="false" height="2em" />
          <span className="visually-hidden">Facebook</span>
        </a>
      </StyledFacebookItem>
      <StyledInstagramItem>
        <a href="https://www.instagram.com/__dardarbinks/">
          <IconInstagram aria-hidden="true" focusable="false" height="2em" />
          <span className="visually-hidden">Instagram</span>
        </a>
      </StyledInstagramItem>
    </StyledContactList>
  </StyledContactSection>
))

export default Contact
