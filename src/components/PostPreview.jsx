import React from "react"
import { Link } from "gatsby"

import { kebabCase } from "lodash"

import Img from "gatsby-image"

export default ({ title, subtitle, date, description, slug, image, tags }) => (
  <article className="post-preview">
    {image ? (
      <Img className="post-preview__image" fluid={image} />
    ) : (
      <div className="gatsby-image-wrapper gatsby-image-wrapper-placeholder"></div>
    )}

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

    {tags && (
      <ul className="tag-list">
        {tags.map(tag => {
          const href = `/tags/${kebabCase(tag)}/`
          return (
            <li key={href} className="tag-list-item">
              <Link to={href} className="tag">
                {tag}
              </Link>
            </li>
          )
        })}
      </ul>
    )}
  </article>
)
