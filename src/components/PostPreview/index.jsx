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

    <header className="post-preview__header">
      {title && (
        <h3 className="post-preview__h3">
          <Link to={slug}>{title}</Link>
        </h3>
      )}
      {subtitle && <p className="post-preview__subtitle">{subtitle}</p>}
      {date && <p className="post-preview__date">{date}</p>}
    </header>

    {description && <p className="post-preview__description">{description}</p>}

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
