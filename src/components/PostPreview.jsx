import React from "react"
import { Link } from "gatsby"

import { StyledPostPreview, StyledImg } from "./PostPreview.styles"

export default ({ title, subtitle, date, description, slug, image }) => (
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
    {image ? (
      <StyledImg fluid={image} />
    ) : (
      <div className="gatsby-image-wrapper gatsby-image-wrapper-placeholder"></div>
    )}
    {description && <p>{description}</p>}
  </StyledPostPreview>
)
