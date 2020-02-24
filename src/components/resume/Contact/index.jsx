import React from "react"

import IconFacebook from "./facebook.inline.svg"
import IconInstagram from "./instagram.inline.svg"
import IconLinkedin from "./linkedin.inline.svg"
import IconEmail from "./gmail.inline.svg"

const Contact = React.forwardRef(({ id }, ref) => (
  <section className="contact">
    <header id={id} ref={ref}>
      <h2>Contact</h2>
    </header>
    <ul className="contact-list">
      <li className="contact-list__item contact-list__item--email">
        <a href="mailto:darius@decepulis.com">
          <IconEmail aria-hidden="true" focusable="false" height="2em" />
          <span className="visually-hidden-text">Email</span>
        </a>
      </li>
      <li className="contact-list__item contact-list__item--linkedin">
        <a href="https://www.linkedin.com/in/decepulis/">
          <IconLinkedin aria-hidden="true" focusable="false" height="2em" />
          <span className="visually-hidden-text">LinkedIn</span>
        </a>
      </li>
      <li className="contact-list__item contact-list__item--facebook">
        <a href="https://www.facebook.com/de.cepulis">
          <IconFacebook aria-hidden="true" focusable="false" height="2em" />
          <span className="visually-hidden-text">Facebook</span>
        </a>
      </li>
      <li className="contact-list__item contact-list__item--instagram">
        <a href="https://www.instagram.com/__dardarbinks/">
          <IconInstagram aria-hidden="true" focusable="false" height="2em" />
          <span className="visually-hidden-text">Instagram</span>
        </a>
      </li>
    </ul>
  </section>
))

export default Contact
