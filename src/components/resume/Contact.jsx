import React from "react"

import { StyledContactSection } from "./Contact.styles"
import { JustAStyledHomeContainer } from "../layout.styles"

const Contact = React.forwardRef(({ id }, ref) => (
  <StyledContactSection id={id} ref={ref}>
    <JustAStyledHomeContainer>
      <header>
        <h2>Contact</h2>
      </header>
      <dl>
        <dt>E-Mail</dt>
        <dd>
          <a href="mailto:darius@decepulis.com">
            darius
            <wbr />
            @decepulis.com
          </a>
        </dd>
        <dt>LinkedIn</dt>
        <dd>
          <a href="https://www.linkedin.com/in/decepulis/">
            https://www.linkedin.com/
            <wbr />
            in/
            <wbr />
            decepulis/
          </a>
        </dd>
        <dt>Facebook</dt>
        <dd>
          <a href="https://www.facebook.com/de.cepulis">
            https://www.facebook.com/
            <wbr />
            de.cepulis/
          </a>
        </dd>
        <dt>Instagram</dt>
        <dd>
          <a href="https://www.instagram.com/__dardarbinks/">
            https://www.instagram.com/
            <wbr />
            __dardarbinks/
          </a>
        </dd>
      </dl>
    </JustAStyledHomeContainer>
  </StyledContactSection>
))

export default Contact
