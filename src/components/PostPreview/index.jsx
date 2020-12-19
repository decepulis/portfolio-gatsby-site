import React from "react";
import { Link } from "gatsby";

import kebabCase from "lodash/kebabCase";

import Img from "gatsby-image";

export default ({ title, subtitle, date, description, slug, image, tags }) => (
  <article>
    {image ? (
      <Img fluid={image} />
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
      <ul>
        {tags.map((tag) => {
          const href = `/tags/${kebabCase(tag)}/`;
          return (
            <li key={href}>
              <Link to={href}>{tag}</Link>
            </li>
          );
        })}
      </ul>
    )}
  </article>
);
