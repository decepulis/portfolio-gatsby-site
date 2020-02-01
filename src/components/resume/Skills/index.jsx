import React from "react"

import { Link } from "gatsby"

import { StyledPosts } from "./styles"
import { JustAStyledHomeContainer } from "../../layout.styles"

// todo: pull _this_ information from the cms
const Skills = React.forwardRef(({ id }, ref) => (
  <section ref={ref} id={id}>
    <JustAStyledHomeContainer>
      <header>
        <h2>Technical Skills</h2>
      </header>

      <StyledPosts>
        <article>
          <header>
            <h3>Front-End Web</h3>
          </header>
          <dl>
            <section>
              <dt>Markup</dt>
              <dd>
                <Link to="/tags/html">HTML5</Link>,{" "}
                <Link to="/tags/markdown">Markdown</Link>,{" "}
                <Link to="/tags/nunjucks">Nunjucks</Link>,{" "}
                <Link to="/tags/pug">Pug</Link>
              </dd>
            </section>
            <section>
              <dt>Style</dt>
              <dd>
                <Link to="/tags/scss">SCSS</Link>,{" "}
                <Link to="/tags/css">CSS</Link>,{" "}
                <Link to="/tags/styled-components">Styled Components</Link>,{" "}
                <Link to="/tags/bootstrap">Bootstrap</Link>
              </dd>
            </section>
            <section>
              <dt>Scripting</dt>
              <dd>
                <Link to="/tags/javascript-es-6">JavaScript/ES6</Link>,{" "}
                <Link to="/tags/react">JSX</Link>
              </dd>
            </section>
            <section>
              <dt>Frameworks & Favorite Libraries</dt>
              <dd>
                <Link to="/tags/react">React (Hooks, Context, Router)</Link>,{" "}
                <Link to="/tags/jquery">jQuery</Link>,{" "}
                <Link to="/tags/bootstrap">Bootstrap</Link>,{" "}
                <Link to="/tags/xstate">XState</Link>,{" "}
                <Link to="/tags/recharts">Recharts</Link>
              </dd>
            </section>
            <section>
              <dt>Build Tools</dt>
              <dd>
                <Link to="/tags/gatsby">Gatsby</Link>,{" "}
                <Link to="/tags/webpack">Webpack</Link>,{" "}
                <Link to="/tags/parcel">Parcel</Link>,{" "}
                <Link to="/tags/gulp">Gulp</Link>
              </dd>
            </section>
            <section>
              <dt>Favorite Topics</dt>
              <dd>
                <Link to="/tags/gamification">Gamification</Link>,{" "}
                <Link to="/tags/load-times">Load Times</Link>,{" "}
                <Link to="/tags/accessibility">Accessibility</Link>,{" "}
                <Link to="/tags/svg">SVGs</Link>,{" "}
                <Link to="/tags/parallax">Parallax</Link>
              </dd>
            </section>
          </dl>
        </article>

        <article>
          <header>
            <h3>Back-End Web, Cloud Computing, &amp; Infrastructure</h3>
          </header>
          <dl>
            <section>
              <dt>Libraries</dt>
              <dd>
                <Link to="/tags/django">Django (DRF, Channels 2)</Link>
              </dd>
            </section>
            <section>
              <dt>Scripting</dt>
              <dd>
                <Link to="/tags/python">Python 3</Link>,{" "}
                <Link to="/tags/javascript-es-6">JavaScript/ES6 (node.js)</Link>
              </dd>
            </section>
            <section>
              <dt>Databases</dt>
              <dd>
                <Link to="/tags/postgresql">PostgreSQL</Link>,{" "}
                <Link to="/tags/influxdb">InfluxDB</Link>
              </dd>
            </section>
            <section>
              <dt>AWS</dt>
              <dd>
                <Link to="/tags/aws">
                  Elastic Beanstalk (EC2, Classic Load Balancer)
                </Link>
                , <Link to="/tags/aws">Elasticache</Link>,{" "}
                <Link to="/tags/aws">RDS</Link>,{" "}
                <Link to="/tags/aws">Route53</Link>
              </dd>
            </section>
            <section>
              <dt>Servers &amp; Serverless</dt>
              <dd>
                <Link to="/tags/netlify">Netlify</Link>,{" "}
                <Link to="/tags/apache">Apache</Link>
              </dd>
            </section>
          </dl>
        </article>

        <article>
          <header>
            <h3>I could also hold a conversation about...</h3>
          </header>
          <dl>
            <section>
              <dt>Code</dt>
              <dd>
                <Link to="/tags/matlab">MATLAB</Link>,{" "}
                <Link to="/tags/latex">LaTeX</Link>,{" "}
                <Link to="/tags/swift">Swift</Link>, <Link to="/tags/c">C</Link>
                , <Link to="/tags/assembly">Assembly</Link>
              </dd>
            </section>
            <section>
              <dt>Design &amp; Creative Tools</dt>
              <dd>
                <Link to="/tags/ui-ux">UI/UX</Link>,{" "}
                <Link to="/tags/photoshop">Photoshop</Link>,{" "}
                <Link to="/tags/illustrator">Illustrator</Link>,{" "}
                <Link to="/tags/final-cut">Final Cut Pro</Link>
              </dd>
            </section>
            <section>
              <dt>Hardware</dt>
              <dd>
                <Link to="/tags/arduino">Arduino</Link>,{" "}
                <Link to="/tags/raspberry-pi">Raspberry Pi</Link>,{" "}
                <Link to="/tags/ble">BLE</Link>,{" "}
                <Link to="/tags/electronics">Electronics</Link>,{" "}
                <Link to="/tags/digital-design">Digital Design</Link>
              </dd>
            </section>
            <section>
              <dt>Real Life</dt>
              <dd>
                <Link to="/tags/teaching">Teaching</Link>,{" "}
                <Link to="/tags/public-speaking">Public Speaking</Link>,{" "}
                <Link to="/tags/research">Research</Link>,{" "}
                <Link to="/tags/requirements">Requirements Engineering</Link>
              </dd>
            </section>
          </dl>
        </article>
        <article>
          <header>
            <h3>Language</h3>
          </header>
          <ul>
            <li>
              <a href="https://en.wikipedia.org/wiki/Common_European_Framework_of_Reference_for_Languages#Common_reference_levels">
                English&nbsp;(C2)
              </a>
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/Common_European_Framework_of_Reference_for_Languages#Common_reference_levels">
                Lithuanian&nbsp;(C2)
              </a>
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/Common_European_Framework_of_Reference_for_Languages#Common_reference_levels">
                German&nbsp;(A2)
              </a>
            </li>
          </ul>
        </article>
      </StyledPosts>
    </JustAStyledHomeContainer>
  </section>
))

export default Skills
