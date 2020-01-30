import React from "react"
import { Link } from "gatsby"

import { StyledPostPreview } from "./PostPreview.styles"

export default ({ title, subtitle, date, description, slug }) => (
  <StyledPostPreview>
    <header>
      {title && (
        <h3>
          <Link to={slug}>{title}</Link>
        </h3>
      )}
      {subtitle && <p>{subtitle}</p>}
      {date && <p>{date}</p>}
    </header>
    {description && <p>{description}</p>}
  </StyledPostPreview>
)
